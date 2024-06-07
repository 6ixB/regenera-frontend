export default function Settings() {
  return (
    <main
      className={
        "flex h-full w-full flex-1 overflow-y-hidden bg-light-background-200"
      }
    >
      <div className="flex h-full w-full flex-col gap-12 overflow-y-auto p-4 md:px-16 md:py-8">
        <div className="flex h-full flex-col gap-8 rounded-xl border border-light-background-300 bg-light-background-100 p-8">
          <div className="text-light-text-100">
            <div className="text-lg font-semibold text-light-text-100">
              Apperance
            </div>
            <div className="text-base">
              Manage settings for the web app apperance
            </div>
          </div>
          <div className="text-light-text-100">
            <div className="text-base font-semibold text-light-text-100">
              Theme
            </div>
            <div className="text-base">
              This will change the theme of the web app
            </div>
            <div className="mt-6 flex w-full items-center gap-6">
              <div className="flex cursor-pointer flex-col items-center gap-1">
                <div className="h-40 w-64 rounded-2xl border bg-light-background-300 hover:border-light-accent-100"></div>
                <div>System default</div>
              </div>
              <div className="flex cursor-pointer flex-col items-center gap-1">
                <div className="h-40 w-64 rounded-2xl border bg-light-background-300 hover:border-light-accent-100"></div>
                <div>Light</div>
              </div>
              <div className="flex cursor-pointer flex-col items-center gap-1">
                <div className="h-40 w-64 rounded-2xl border bg-light-background-300 hover:border-light-accent-100"></div>
                <div>Dark</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
