
import { shallowRef } from 'vue'
// import createSharedComposable from './createSharedComposable'

type Options = {
  time?: number,
  onProcess?: (e: ArrayBuffer) => void
  onStop?: (data: Blob[]) => void
  defaultMine?: "video/webm;codecs=h264" | "video/webm" | 'video/webm;codecs=vp9'
}

// "video/webm",
// "audio/webm",
// "video/webm;codecs=vp8",
// "video/webm;codecs=daala",
// "video/webm;codecs=h264",
// "audio/webm;codecs=opus",
// "video/mpeg",

function useShareScreen(options: Options) {

  const {
    time = 1000,
    onProcess,
    onStop,
    defaultMine
  } = options ?? {}

  const chunks = shallowRef<Blob[]>([])
  // 检查浏览器是否支持 H.264 视频编码格式
  // H.264 是一种广泛使用的视频压缩格式，具有较高的视频质量和较低的文件大小。
  const mime = defaultMine ?? (MediaRecorder.isTypeSupported("video/webm;codecs=h264")
  ? "video/webm;codecs=h264"
  : "video/webm");

  const onShare = async () => {

    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });

    // https://developer.mozilla.org/zh-CN/docs/Web/API/MediaRecorder
    const mediaRecorder = new MediaRecorder(stream, { mimeType: mime });

    mediaRecorder.addEventListener("dataavailable", async function (e) {
      const buffer = await e.data.arrayBuffer()
      onProcess?.(buffer)
      chunks.value.push(e.data);
    });
    mediaRecorder.addEventListener("stop", stopMedia);
    mediaRecorder.start(time);
  }

  function stopMedia() {
    onStop?.(chunks.value)
    chunks.value = []
  }

  return {
    onShare,
    mime
  }
}

export {
  useShareScreen
} 