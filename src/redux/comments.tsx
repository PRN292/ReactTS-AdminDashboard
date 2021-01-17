import {RootStateOrAny} from "react-redux";
import {COMMENTS} from "../components/shared/comments";
import {Action} from "redux";

export const Comments = (state: RootStateOrAny = COMMENTS, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
};
