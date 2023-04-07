import { sleep } from "./utils/sleep.js";
import { VideoPlayer, VideoPlayer } from "./service/ui/video-player.js";
import {DataForm} from "./service/ui/utils/input-data-form.js";
import {checkPlayingTime} from"./service/checkTime.js";
const dataForm = new DataForm("form-section");
const VideoPlayer = new VideoPlayer("video-section");
dataForm.addHandler(async (data)=>{

let res = checkPlayingTime(data.time)
if (!res)   {

VideoPlayer.setUrl(data.link);
VideoPlayer.start();
await sleep(data.time*1000);
VideoPlayer.stop();
}
return res;
})