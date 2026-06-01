import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

function SplashScreen({ onFinish }) {
  const mountRef = useRef(null)
  const [phase, setPhase] = useState("pulse") // pulse → expand → done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("expand"), 3000)
    const t2 = setTimeout(() => onFinish(), 4200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onFinish])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const w = mount.clientWidth
    const h = mount.clientHeight

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(window.devicePixelRatio)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100)
    camera.position.z = 5

    // Heart shape
    const heartShape = new THREE.Shape()
    heartShape.moveTo(0, 0)
    heartShape.bezierCurveTo(0, -0.3, -0.5, -1.5, -1.5, -1.5)
    heartShape.bezierCurveTo(-2.5, -1.5, -2.5, -0.5, -2.5, -0.5)
    heartShape.bezierCurveTo(-2.5, 0.5, -1.5, 1.4, 0, 2.5)
    heartShape.bezierCurveTo(1.5, 1.4, 2.5, 0.5, 2.5, -0.5)
    heartShape.bezierCurveTo(2.5, -0.5, 2.5, -1.5, 1.5, -1.5)
    heartShape.bezierCurveTo(0.5, -1.5, 0, -0.3, 0, 0)

    const geometry = new THREE.ExtrudeGeometry(heartShape, {
      depth: 0.5,
      bevelEnabled: true,
      bevelSegments: 10,
      steps: 2,
      bevelSize: 0.18,
      bevelThickness: 0.18,
    })
    geometry.center()

    const material = new THREE.MeshStandardMaterial({
      color: 0xe91e8c,
      roughness: 0.2,
      metalness: 0.5,
    })

    const heart = new THREE.Mesh(geometry, material)
    heart.scale.set(0.55, 0.55, 0.55)
    scene.add(heart)

    // Text texture on front face
    const canvas = document.createElement("canvas")
    canvas.width = 512
    canvas.height = 256
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, 512, 256)
    ctx.fillStyle = "#000000"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.font = "bold 76px Georgia, serif"
    ctx.fillText("22 anos", 256, 95)
    ctx.font = "italic 62px Georgia, serif"
    ctx.fillText("da Lele", 256, 178)

    const texture = new THREE.CanvasTexture(canvas)
    const textMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2.2, 1.1),
      new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false })
    )
    textMesh.position.set(0, 0, 0.46)
    heart.add(textMesh)

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6))
    const pl1 = new THREE.PointLight(0xff69b4, 3, 20)
    pl1.position.set(3, 3, 3)
    scene.add(pl1)
    const pl2 = new THREE.PointLight(0xffffff, 1.5, 20)
    pl2.position.set(-3, -2, 2)
    scene.add(pl2)
    const dl = new THREE.DirectionalLight(0xffb6c1, 1.2)
    dl.position.set(0, 0, 5)
    scene.add(dl)

    let animId
    let start = null
    let expandStart = null
    let expanding = false

    const animate = (timestamp) => {
      if (!start) start = timestamp
      const elapsed = (timestamp - start) / 1000

      if (!expanding) {
        // Heartbeat pulse
        const beat = 1 + 0.1 * Math.abs(Math.sin(elapsed * Math.PI * 1.3))
        heart.scale.set(0.55 * beat, 0.55 * beat, 0.55 * beat)
        heart.rotation.y = Math.sin(elapsed * 0.7) * 0.2
        heart.rotation.x = Math.sin(elapsed * 0.35) * 0.07
        textMesh.rotation.y = -heart.rotation.y
      } else {
        // Expand heart to fill screen
        if (!expandStart) expandStart = timestamp
        const t = Math.min((timestamp - expandStart) / 1000, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        const targetScale = 12
        const s = 0.55 + (targetScale - 0.55) * eased
        heart.scale.set(s, s, s)
        heart.rotation.y = 0
        heart.rotation.x = 0
        // Fade text during expansion
        textMesh.material.opacity = Math.max(0, 1 - t * 3)
      }

      renderer.render(scene, camera)
      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)

    // Trigger expansion
    const expandTimer = setTimeout(() => { expanding = true }, 3000)

    return () => {
      cancelAnimationFrame(animId)
      clearTimeout(expandTimer)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#fff0f5",
        zIndex: 9999,
        overflow: "hidden",
        opacity: phase === "expand" ? 1 : 1,
        transition: "opacity 0.4s ease",
      }}
    >
      <div
        ref={mountRef}
        style={{ width: "100vw", height: "100vh", position: "absolute", inset: 0 }}
      />

      {/* Pink overlay that fades in when heart fills screen */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#e91e8c",
          opacity: phase === "expand" ? 1 : 0,
          transition: "opacity 0.6s ease 0.8s",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
    </div>
  )
}

export default SplashScreen