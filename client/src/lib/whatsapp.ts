// Number is split so bots cannot scrape it directly from source code.
// It is only assembled at runtime in the browser.
const _p = ["49", "173", "439", "4343"];

export function waLink(text?: string): string {
  const num = _p.join("");
  const base = `https://wa${"." + "me"}/${num}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function waDisplay(): string {
  return `+${_p[0]} ${_p[1]} ${_p[2]} ${_p[3]}`;
}
