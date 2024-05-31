import { gsap } from "https://esm.sh/gsap@3.12.5";
import { useEffect } from "preact/hooks";
import { signal } from "@preact/signals";

export const animationComplete = signal(false);

export default function Letter({ letter }: { letter: string }) {
  useEffect(() => {
    const letter = document.getElementById("letter");

    if (letter) {
      const originalNodes: ChildNode[] = Array.from(letter.childNodes);

      const wrapCharacters = (
        node: ChildNode,
      ): DocumentFragment | HTMLElement => {
        if (node.nodeType === Node.TEXT_NODE) {
          const fragment = document.createDocumentFragment();
          node.textContent?.split("").forEach((char) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.opacity = "0";
            fragment.appendChild(span);
          });
          return fragment;
        } else {
          const clonedNode = node.cloneNode() as HTMLElement;
          Array.from(node.childNodes).forEach((child) => {
            clonedNode.appendChild(wrapCharacters(child));
          });
          return clonedNode;
        }
      };

      letter.innerHTML = "";
      originalNodes.forEach((node) => {
        letter.appendChild(wrapCharacters(node));
      });

      const spans = letter.querySelectorAll("span");
      spans.forEach((span, index) => {
        gsap.to(span, {
          opacity: 1,
          duration: 1,
          delay: index * 0.02,
          ease: "power1.inOut",
          onComplete: () => {
            if (index === spans.length - 1) {
              letter.innerHTML = "";
              originalNodes.forEach((node) => letter.appendChild(node));
              animationComplete.value = true;
            }
          },
        });
      });
    }
  }, []);

  return (
    <div class="envelope-open">
      <p
        id="letter"
        class="rounded-mplus-1c"
        dangerouslySetInnerHTML={{ __html: letter }}
      >
      </p>

      <p
        class={`rubber spicy-rice p-2 transition-all duration-200 ${
          animationComplete.value ? "opacity-40" : "opacity-0"
        }`}
      >
        Seu amor
      </p>
    </div>
  );
}
