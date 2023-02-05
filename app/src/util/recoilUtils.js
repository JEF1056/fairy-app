import React from "react";
import {
  useRecoilCallback,
  useRecoilTransactionObserver_UNSTABLE,
} from "recoil";

export let RecoilGetLoadable = undefined;
export let RecoilSet = undefined;
export let RecoilGet = undefined;

export function RecoilUtilsComponent() {
  // We need to update the RecoilGetLoadable every time there's a new snapshot
  // Otherwise we will load old values from when the component was mounted
  useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
    RecoilGetLoadable = snapshot.getLoadable;
  });

  // We only need to assign RecoilSet once because it's not temporaly dependent like get is
  useRecoilCallback(({ set, get }) => {
    RecoilSet = set;
    RecoilGet = get;

    return async () => {};
  })();

  return <></>;
}
