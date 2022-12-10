import store from "./store";
import { setLaunch } from "./store/launch";
import { setCollection } from "./store/collection";
import { setNft } from "../store/nft";

export const launchHandle = (data) => {
  store.dispatch(setLaunch(data));
};

export const collectionHandle = (data) => {
  store.dispatch(setCollection(data));
};

export const nftHandle = (data) => {
  store.dispatch(setNft(data));
};
