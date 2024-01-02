<template>
  <div ref="box">
    <!-- <canvas ref="canvas"></canvas> -->
  </div>
</template>

<script lang='ts' setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GUI } from 'three'

const box = ref()
// const webgl = ref<WebGLRenderingContext | null>()
// const canvas = ref<HTMLCanvasElement>()
// const transformRgba = (rgbaStr = 'rgba(255, 0, 1, 1)') => {
//   const reg = RegExp(/\((.*)\)/)
//   console.log(rgbaStr.match(reg));
// }

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  // document.body.appendChild(  renderer.domElement );
  box.value.appendChild( renderer.domElement );
  const controls = new OrbitControls( camera, renderer.domElement );
  controls.update();

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  // const line = new THREE.LineBasicMaterial( { color: 0x0000ff } );
  // const points = [];
  // points.push( new THREE.Vector3( - 10, 0, 0 ) );
  // points.push( new THREE.Vector3( 0, 10, 0 ) );
  // points.push( new THREE.Vector3( 10, 0, 0 ) );

  const axesHepler = new THREE.AxesHelper(5)
  scene.add(axesHepler)
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  cube.position.set(2, 0, 0)
  camera.position.set( 1, 1, 10 );
  camera.lookAt( 0, 0, 0 );

  function animate() {
    requestAnimationFrame( animate );
    // 旋转
    // cube.rotation.x += 0.01/
    // cube.rotation.y += 0.01
    controls.update();
    renderer.render( scene, camera );
  }
  animate();
  window.addEventListener('resize', () => {
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix
  })
  // if (!canvas.value) return
  // canvas.value.width = window.innerWidth
  // canvas.value.height = window.innerHeight
  // canvas.value.style.width = `${window.innerWidth}px`;
  // canvas.value.style.height = `${window.innerHeight}px`;
  // webgl.value = canvas.value.getContext('webgl')

  // const color = new THREE.Color('rgb(255, 0, 1)')
  // const { r, g, b } = color
  // // 使用完全不透明的黑色清除所有图像
  // webgl.value?.clearColor(r, g, b, 1)
  // // 用上面指定的颜色清除缓冲区
  // webgl.value?.clear(webgl.value.COLOR_BUFFER_BIT);
  // (function ani(){
    // color.offsetHSL(0.005, 0, 0)
  //   const { r, g, b } = color
  //   webgl.value?.clearColor(r, g, b, 1)
  //   webgl.value?.clear(webgl.value.COLOR_BUFFER_BIT);
  //   requestAnimationFrame(ani)
  // })()
})
</script>

<style lang='stylus' scoped>

</style>