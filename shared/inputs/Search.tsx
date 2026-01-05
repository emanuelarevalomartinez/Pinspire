"use client";

import { Input } from "@/components/ui/input";
import { useApp } from "@/store/ContextProvider";
import { useQueryState } from "nuqs";
import { useState } from "react";

export function Search() {
  const { refreshSearchView, setRefreshSearchView } = useApp();

  const [, setTerm] = useQueryState("term", { defaultValue: "" });
  const [, setPage] = useQueryState("page", {
    defaultValue: 1,
    parse: Number,
  });

  const [value, setValue] = useState("");

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && value.trim()) {
      setTerm(value.trim());
      setPage(1);
      setValue("");
      setRefreshSearchView(!refreshSearchView);
    }
  }

  return (
    <Input
      type="search"
      placeholder="Encuentra ideas sobre cenas fáciles, moda, etc."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={onKeyDown}
    />
  );
}
