import {RootStateOrAny} from "react-redux";
import {DISHES} from "../components/shared/dishes";
import {Action} from "redux";

export const Dishes = (state: RootStateOrAny = DISHES, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
};
