import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { STATUS_SUCCESS, STATUS_FAILED } from "../store/actionTypes";

export default function useListenStatus(
  status,
  onSuccess,
  onFailure,
  resetAction
) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === STATUS_FAILED) {
      onFailure();
      dispatch(resetAction);
    } else if (status === STATUS_SUCCESS) {
      onSuccess();
      dispatch(resetAction);
    }
    return () => {
      if (resetAction) {
        // dispatch(resetAction);
      }
    };
  }, [status, onSuccess, onFailure, dispatch, resetAction]);
}
