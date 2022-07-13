/// <reference path="./index.d.ts" />

import {Boot} from "../../_base/boot";
import {Library, SpriteSheet, Images} from "./lib";
import {Main_audio} from "./main";
import {EventReceiver} from "../../_base/events/event-receiver";

const boot = new Boot();
boot.registerLayers(Boot.findLayers());
boot.setMainLibrary(Library, 'audio');
boot.setSpriteSheet(SpriteSheet);
boot.setImages(Images);

const eventReceiver = new EventReceiver(document.body);

boot.start().then((root: audio.Root) => {
    const main = new Main_audio(root);
    window['exercise'] = main;
    main.setLayers(boot.getLayers());
    main.setEventEmitter(document.body);
    eventReceiver.addSubscriber(main);
    document.body.setAttribute('resourceStatus', '1');
    document.body.dispatchEvent(new CustomEvent('loadedResource'));
});
