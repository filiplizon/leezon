export function lastSingleLetterToNewLine(
  element: HTMLParagraphElement | HTMLLIElement
) {
  const regex = / ([A-Za-z]) /g;
  element.innerHTML = element.innerHTML.replace(regex, " $1&nbsp;");
}
