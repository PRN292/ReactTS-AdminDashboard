import {RootStateOrAny} from "react-redux";
import {LEADERS} from "../components/shared/leaders";
import {Action} from "redux";

export const Leaders = (state: RootStateOrAny = LEADERS, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
}
