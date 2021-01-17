import {RootStateOrAny} from "react-redux";
import {PROMOTIONS} from "../components/shared/promos";
import {Action} from "redux";

export const Promotions = (state: RootStateOrAny = PROMOTIONS, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
}
