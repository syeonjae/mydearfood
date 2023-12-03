"use client";

import { Dispatch, createContext, useReducer } from "react";

type StateType = {
  isOpen: boolean;
};

type actionType = "Toggle";

type ActionType = {
  type: actionType;
};

const initialState: StateType = {
  isOpen: false,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "Toggle":
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

export const SidebarContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const SideBarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SidebarContext.Provider value={{ state, dispatch }}>
      {children}
    </SidebarContext.Provider>
  );
};
