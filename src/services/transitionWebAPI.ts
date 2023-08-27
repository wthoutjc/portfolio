"use client";
const IsNavigatorSupported = () => {
  return Boolean(document.startViewTransition);
};

const fetchPage = async (url: string) => {
  const respone = await fetch(url);
  const html = await respone.text();

  // Extract the <body> from the HTML
  const body = new DOMParser().parseFromString(html, "text/html").body;

  return body;
};

export const startViewTransition = () => {
  if (!IsNavigatorSupported()) return;

  window.navigation.addEventListener("navigate", (event: any) => {
    const toUrl = new URL(event.destination.url);

    // If is a external link, we don't want to animate or If the destination is a different page but same origin, we want to animate the transition
    if (
      toUrl.origin !== window.location.origin ||
      toUrl.pathname === window.location.pathname
    )
      return;

    event.intercept({
      async handler() {
        const body = await fetchPage(toUrl.pathname);

        // Start the transition
        document.startViewTransition(() => {
          // How to animate the transition
          document.getElementById("content")!.innerHTML = body.innerHTML;
        });
      },
    });
  });
};
