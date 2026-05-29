"use client";

export function ErrorButton() {
  return (
    <button
      className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700 active:bg-red-800"
      onClick={() => {
        throw new Error("This is a test error triggered by the button");
      }}
    >
      Throw Error
    </button>
  );
}
