function flex2html(e, t) { let r = carousel_struc(), i = ""; return "flex" === t.type && ("bubble" === (t = t.contents).type ? (i = bubble_object(t), r = r.replace("\x3c!-- inner --\x3e", i)) : "carousel" === t.type && t.contents.forEach(((e, t) => { let i = bubble_object(e); i = i.replace("\x3c!-- content --\x3e", ""), i = i.replace("\x3c!-- inner --\x3e", ""), r = r.replace("\x3c!-- inner --\x3e", i + "\x3c!-- inner --\x3e") }))), document.getElementById(e).innerHTML += r, r } function bubble_object(e) { let { hero: t, header: r, body: i, footer: l } = e, o = hero_struc(e), a = header_struc(e), x = body_struc(e), n = footer_struc(e), d = bubble_struc(e), c = ""; if ("video" === t?.type) c = hero_box_video(t); else if ("image" === t?.type) c = convert_object("", t); else for (let e in t) if (t.hasOwnProperty(e) && "type" === e && "box" === t[e]) { c = box_object(t), layout = t.layout, c = box_recursive(c, layout, t.contents) } o = o.replace("\x3c!-- inner --\x3e", c), c = ""; for (let e in r) if (r.hasOwnProperty(e) && "type" === e && "box" === r[e]) { c = box_object(r), layout = r.layout, c = box_recursive(c, layout, r.contents) } a = a.replace("\x3c!-- inner --\x3e", c), c = ""; for (let e in i) if (i.hasOwnProperty(e) && "type" === e && "box" === i[e]) { c = box_object(i), layout = i.layout, c = box_recursive(c, layout, i.contents) } x = x.replace("\x3c!-- inner --\x3e", c), c = ""; for (let e in l) if (l.hasOwnProperty(e) && "type" === e && "box" === l[e]) { c = box_object(l), layout = l.layout, c = box_recursive(c, layout, l.contents) } return n = n.replace("\x3c!-- inner --\x3e", c), d = d.replace("\x3c!-- hero --\x3e", o), d = d.replace("\x3c!-- header --\x3e", a), d = d.replace("\x3c!-- body --\x3e", x), d = d.replace("\x3c!-- footer --\x3e", n), d } function hero_box_video(e) { return `<div class="ExCover MdImg ExFull"><div><video width="100%" poster="${e?.previewUrl}" controls>\n   <source src="${e?.url}" type="video/mp4">\n   <source src="${e?.url}" type="video/ogg">\n   <source src="${e?.url}" type="video/webm">\n</video></div></div>` } function box_recursive(e, t, r) { let i = []; return r.forEach(((e, r) => { let l; if ("box" === e.type) { let t = box_object(e); layout2 = e.layout, l = box_recursive(t, layout2, e.contents) } else if ("text" === e.type && e.contents && e.contents.length > 0) { let r = convert_object(t, e); layout2 = e.layout, l = box_recursive(r, layout2, e.contents) } else l = convert_object(t, e); i[r] = l })), r.forEach(((t, r) => { i[r] = i[r].replace("\x3c!-- content --\x3e", ""), e = e.replace("\x3c!-- content --\x3e", i[r] + "\x3c!-- content --\x3e") })), e } function convert_object(e, t) { switch (t.type) { case "image": object = image_object(t); break; case "icon": object = icon_object(t); break; case "text": object = text_object(t); break; case "span": object = span_object(t); break; case "button": object = button_object(t); break; case "filler": object = filler_object(t); break; case "spacer": object = spacer_object(t); break; case "separator": object = separator_object(e, t); break; default: object = null }return object } function box_object(e) { let t = "", { layout: r, position: i, flex: l, spacing: o, margin: a, width: x, height: n, backgroundColor: d, borderColor: c, borderWidth: s, cornerRadius: p, justifyContent: $, alignItems: f, offsetTop: b, offsetBottom: g, offsetStart: u, offsetEnd: y, paddingAll: E, paddingTop: m, paddingBottom: v, paddingStart: h, paddingEnd: k, background: B, maxWidth: j, maxHeight: _ } = e; if ("baseline" === r ? (layout1 = "hr", layout2 = "bl") : "horizontal" === r ? (layout1 = "hr", layout2 = "") : "vertical" === r && (layout1 = "vr", layout2 = ""), fl = "", l > 3 ? t += `-webkit-box-flex:${l};flex-grow:${l};` : fl = l >= 0 ? `fl${l}` : "", exabs = "absolute" === i ? "ExAbs" : "", o && o.indexOf("px") >= 0 ? spc = "" : spc = o ? "spc" + upperalldigit(o) : "", a && a.indexOf("px") >= 0 ? (t += `margin-top:${a};`, exmgn = "") : exmgn = a ? "ExMgnT" + upperalldigit(a) : "", x && "" !== x && (t += `width:${x}; max-width:${x};`), n && "" !== n && (t += `height:${n};`), d && (t += `background-color:${d} !important;`), c && (t += `border-color:${c} !important;`), s && s.indexOf("px") >= 0) t += `border-width:${s};`, ExBdr = ""; else switch (s) { case "none": ExBdr = "ExBdrWdtNone"; break; case "light": ExBdr = "ExBdrWdtLgh"; break; case "normal": ExBdr = "ExBdrWdtNml"; break; case "medium": ExBdr = "ExBdrWdtMdm"; break; case "semi-bold": ExBdr = "ExBdrWdtSbd"; break; case "bold": ExBdr = "ExBdrWdtBld"; break; default: ExBdr = "" }if (p && p.indexOf("px") >= 0 ? (t += `border-radius:${p};`, ExBdrRad = "") : ExBdrRad = p ? "ExBdrRad" + upperalldigit(p) : "", jfc = "", $ && "" !== $) switch ($) { case "center": jfc = "itms-jfcC"; break; case "flex-start": jfc = "itms-jfcS"; break; case "flex-end": jfc = "itms-jfcE"; break; case "space-between": jfc = "itms-jfcSB"; break; case "space-around": jfc = "itms-jfcSA"; break; case "space-evenly": jfc = "itms-jfcSE"; break; default: jfc = "" }if (alg = "", f && "" !== f) switch (f) { case "center": alg = "itms-algC"; break; case "flex-start": alg = "itms-algS"; break; case "flex-end": alg = "itms-algE"; break; default: alg = "" }return b && b.indexOf("px") >= 0 ? (t += `top:${b};`, ext = "") : ext = b ? "ExT" + upperalldigit(b) : "", g && g.indexOf("px") >= 0 ? (t += `bottom:${g};`, exb = "") : exb = g ? "ExB" + upperalldigit(g) : "", u && u.indexOf("px") >= 0 ? (t += `left:${u};`, exl = "") : exl = u ? "ExL" + upperalldigit(u) : "", y && y.indexOf("px") >= 0 ? (t += `right:${y};`, exr = "") : exr = y ? "ExR" + upperalldigit(y) : "", E && E.indexOf("px") >= 0 ? (t += `padding:${E};`, ExPadA = "") : ExPadA = E ? "ExPadA" + upperalldigit(E) : "", m && m.indexOf("px") >= 0 ? (t += `padding-top:${m};`, ExPadT = "") : ExPadT = m ? "ExPadT" + upperalldigit(m) : "", v && v.indexOf("px") >= 0 ? (t += `padding-bottom:${v};`, ExPadB = "") : ExPadB = v ? "ExPadB" + upperalldigit(v) : "", h && h.indexOf("px") >= 0 ? (t += `padding-left:${h};`, ExPadL = "") : ExPadL = h ? "ExPadL" + upperalldigit(h) : "", k && k.indexOf("px") >= 0 ? (t += `padding-right:${k};`, ExPadR = "") : ExPadR = k ? "ExPadR" + upperalldigit(k) : "", B && "linearGradient" === B.type && (centerPosition = B.centerPosition ? B.centerPosition : "50%", B.centerColor ? t += `background: linear-gradient(${B.angle}, ${B.startColor} 0%, ${B.centerColor} ${centerPosition}, ${B.endColor} 100%);` : t += `background: linear-gradient(${B.angle}, ${B.startColor} 0%, ${B.endColor} 100%);`), j && j.indexOf("px") >= 0 && (t += `max-width:${j};`), _ && _.indexOf("px") >= 0 && (t += `max-height:${_};`), `<div class="MdBx ${layout1} ${layout2} ${fl} ${exabs} ${exmgn} ${spc} ${ExBdr} ${ExBdrRad} ${jfc} ${alg} ${ext} ${exb} ${exl} ${exr} ${ExPadA} ${ExPadT} ${ExPadB} ${ExPadL} ${ExPadR}" style="${t}">\x3c!-- content --\x3e</div>` } function button_object(e) { style2 = "", style3 = ""; let { flex: t, margin: r, position: i, height: l, style: o, color: a, gravity: x, adjustMode: n, offsetTop: d, offsetBottom: c, offsetStart: s, offsetEnd: p, action: $ } = e; if (fl = "", t > 3 ? style2 += `-webkit-box-flex:${t};flex-grow:${t};` : fl = t >= 0 ? `fl${t}` : "", exabs = "absolute" === i ? "ExAbs" : "", r && r.indexOf("px") >= 0 ? (style2 += `margin-top:${r};`, exmgn = "") : exmgn = r ? "ExMgnT" + upperalldigit(r) : "", l = l && "" !== l && "md" !== l ? "Ex" + upperalldigit(l) : "", grv = "bottom" === x || "center" === x ? "grv" + upper1digit(x) : "", ExBtn = "ExBtnL", o && "" !== o) switch (o) { case "link": default: ExBtn = "ExBtnL"; break; case "primary": ExBtn = "ExBtn1"; break; case "secondary": ExBtn = "ExBtn2" }return a && (style3 += "link" === o ? `color:${a} !important;` : `background-color:${a} !important;`), d && d.indexOf("px") >= 0 ? (style2 += `top:${d};`, ext = "") : ext = d ? "ExT" + upperalldigit(d) : "", c && c.indexOf("px") >= 0 ? (style2 += `bottom:${c};`, exb = "") : exb = c ? "ExB" + upperalldigit(c) : "", s && s.indexOf("px") >= 0 ? (style2 += `left:${s};`, exl = "") : exl = s ? "ExL" + upperalldigit(s) : "", p && p.indexOf("px") >= 0 ? (style2 += `right:${p};`, exr = "") : exr = p ? "ExR" + upperalldigit(p) : "", $ = $ || { type: "none" }, "uri" === $.type ? `<div class="MdBtn ${ExBtn} ${l} ${fl} ${exabs} ${exmgn} ${grv} ${ext} ${exb} ${exl} ${exr}" style="${style2}" id="8d1efea2-4017-4c89-8931-98a5f4f141f2"><a href="${$.uri}" target="_blank" style="${style3}"><div>${$.label}</div></a></div>` : "message" === $.type ? `<div class="MdBtn ${ExBtn} ${l} ${fl} ${exabs} ${exmgn} ${grv} ${ext} ${exb} ${exl} ${exr}" style="${style2}" id="8d1efea2-4017-4c89-8931-98a5f4f141f2"><a onclick="alert('message: ${$.text}')" style="${style3}"><div>${$.label}</div></a></div>` : "postback" === $.type ? `<div class="MdBtn ${ExBtn} ${l} ${fl} ${exabs} ${exmgn} ${grv} ${ext} ${exb} ${exl} ${exr}" style="${style2}" id="8d1efea2-4017-4c89-8931-98a5f4f141f2"><a onclick="alert('postback data: ${$.data}')" style="${style3}"><div>${$.label}</div></a></div>` : `<div class="MdBtn ${ExBtn} ${l} ${fl} ${exabs} ${exmgn} ${grv} ${ext} ${exb} ${exl} ${exr}" style="${style2}" id="8d1efea2-4017-4c89-8931-98a5f4f141f2"><a style="${style3}"><div>${$.label}</div></a></div>` } function filler_object(e) { let t = "", { flex: r } = e; return fl = "", r > 3 ? t += `-webkit-box-flex:${r};flex-grow:${r};` : fl = r >= 0 ? `fl${r}` : "", `<div class="mdBxFiller ${fl}" style="${t}" ></div>` } function icon_object(e) { let t = "", { size: r, aspectRatio: i, url: l, position: o, margin: a, offsetTop: x, offsetBottom: n, offsetStart: d, offsetEnd: c } = e, s = `background-image:url('${l}');`; return r = r && "" !== r ? r : "md", r.indexOf("px") >= 0 ? (t += `font-size:${r};`, r = "") : r = "Ex" + upperalldigit(r), i && "" !== i ? (ratio = ratio[0] / ratio[1], s += `width:${ratio}em;`) : s += "width:1em;", exabs = "absolute" === o ? "ExAbs" : "", a && a.indexOf("px") >= 0 ? (t += `margin-top:${a};`, exmgn = "") : exmgn = a ? "ExMgnT" + upperalldigit(a) : "", x && x.indexOf("px") >= 0 ? (t += `top:${x};`, ext = "") : ext = x ? "ExT" + upperalldigit(x) : "", n && n.indexOf("px") >= 0 ? (t += `bottom:${n};`, exb = "") : exb = n ? "ExB" + upperalldigit(n) : "", d && d.indexOf("px") >= 0 ? (t += `left:${d};`, exl = "") : exl = d ? "ExL" + upperalldigit(d) : "", c && c.indexOf("px") >= 0 ? (t += `right:${c};`, exr = "") : exr = c ? "ExR" + upperalldigit(c) : "", `<div class="MdIco fl0 ${r} ${exabs} ${exmgn} ${ext} ${exb} ${exl} ${exr}" style="${t}" ><div><span style="${s}"></span></div></div>` } function image_object(e) { let t = "", r = "", { aspectMode: i, size: l, aspectRatio: o, url: a, position: x, flex: n, margin: d, align: c, gravity: s, backgroundColor: p, offsetTop: $, offsetBottom: f, offsetStart: b, offsetEnd: g, action: u } = e, y = `background-image:url('${a}');`; return p && (y += `background-color:${p} !important;`), i = i && "" !== i ? i : "fit", l = l && "" !== l ? l : "md", i = upperalldigit(i), l.indexOf("px") >= 0 || l.indexOf("%") >= 0 ? (r += `width:${l};`, l = "") : l = "Ex" + upperalldigit(l), o && "" !== o ? (ratio = o.split(":"), ratio = 100 * ratio[1] / ratio[0]) : ratio = "100", fl = "", n > 3 ? t += `-webkit-box-flex:${n};flex-grow:${n};` : fl = n >= 0 ? `fl${n}` : "", exabs = "absolute" === x ? "ExAbs" : "", d && d.indexOf("px") >= 0 ? (t += `margin-top:${d};`, exmgn = "") : exmgn = d ? "ExMgnT" + upperalldigit(d) : "", alg = "start" === c || "end" === c ? "alg" + upper1digit(c) : "", grv = "bottom" === s || "center" === s ? "grv" + upper1digit(s) : "", $ && $.indexOf("px") >= 0 ? (t += `top:${$};`, ext = "") : ext = $ ? "ExT" + upperalldigit($) : "", f && f.indexOf("px") >= 0 ? (t += `bottom:${f};`, exb = "") : exb = f ? "ExB" + upperalldigit(f) : "", b && b.indexOf("px") >= 0 ? (t += `left:${b};`, exl = "") : exl = b ? "ExL" + upperalldigit(b) : "", g && g.indexOf("px") >= 0 ? (t += `right:${g};`, exr = "") : exr = g ? "ExR" + upperalldigit(g) : "", u = u || { type: "none" }, "uri" === u.type ? `<div class="MdImg Ex${i} ${fl} ${l} ${exabs} ${exmgn} ${alg} ${grv} ${ext} ${exb} ${exl} ${exr}"  style="${t}">\n                  <div style="${r}">\n                     <a href="${u.uri}" target="_blank" style="padding-bottom:${ratio}%;">\n                        <span style="${y}"></span>\n                     </a>\n                  </div>\n               </div>` : "message" === u.type ? `<div class="MdImg Ex${i} ${fl} ${l} ${exabs} ${exmgn} ${alg} ${grv} ${ext} ${exb} ${exl} ${exr}"  style="${t}">\n                  <div style="${r}">\n                     <a onclick="alert('message: ${u.text}')" style="padding-bottom:${ratio}%;">\n                        <span style="${y}"></span>\n                     </a>\n                  </div>\n               </div>` : "postback" === u.type ? `<div class="MdImg Ex${i} ${fl} ${l} ${exabs} ${exmgn} ${alg} ${grv} ${ext} ${exb} ${exl} ${exr}"  style="${t}">\n                  <div style="${r}">\n                     <a onclick="alert('postback data: ${u.data}')" style="padding-bottom:${ratio}%;">\n                        <span style="${y}"></span>\n                     </a>\n                  </div>\n               </div>` : `<div class="MdImg Ex${i} ${fl} ${l} ${exabs} ${exmgn} ${alg} ${grv} ${ext} ${exb} ${exl} ${exr}"  style="${t}">\n                  <div style="${r}">\n                     <a style="padding-bottom:${ratio}%;">\n                        <span style="${y}"></span>\n                     </a>\n                  </div>\n               </div>` } function separator_object(e, t) { let r = "", { margin: i, color: l } = t; return i && i.indexOf("px") >= 0 ? (r += "vertical" === e ? `margin-top:${i};` : `margin-left:${i};`, exmgn = "") : exmgn = i ? "ExMgnT" + upperalldigit(i) : "", l && (r += `border-color:${l} !important;`), `<div class="fl0 MdSep ${exmgn}" style="${r}" ></div>` } function spacer_object(e) { let { size: t } = e; return t = t && "" !== t ? t : "md", t = t.indexOf("px") >= 0 ? "" : "spc" + upperalldigit(t), `<div class="mdBxSpacer ${t} fl0" ></div>` } function span_object(e) { let t = "", { text: r, size: i, color: l, weight: o, style: a, decoration: x } = e; return i && "" !== i ? i.indexOf("px") >= 0 ? (t += `font-size:${i};`, i = "") : i = "Ex" + upperalldigit(i) : i = "", l && "" !== l && (t += `color:${l};`), ExWB = "bold" === o ? "ExWB" : "", ExFntSty = "normal" === a ? "ExFntStyNml" : "italic" === a ? "ExFntStyIt" : "", ExTxtDec = "line-through" === x ? "ExTxtDecLt" : "underline" === x ? "ExTxtDecUl" : "none" === x ? "ExTxtDecNone" : "", `<span class="MdSpn ${ExWB} ${i} ${ExFntSty} ${ExTxtDec}" style="${t}" >${r}</span>` } function carousel_struc() { return '<div class="LySlider"><div class="lyInner">\x3c!-- inner --\x3e</div></div><br>' } function bubble_struc(e) { let { size: t, direction: r, action: i } = e; return t = t && "" !== t ? t : "medium", r = r && "" != r ? r : "ltr", t = upper2digit(t), `<div class="lyItem Ly${t}"><div class="T1 fx${r.toUpperCase()}" dir="${r}">\x3c!-- hero --\x3e\x3c!-- header --\x3e\x3c!-- body --\x3e\x3c!-- footer --\x3e</div></div>` } function hero_struc(e) { let { styles: t } = e, r = ""; if (t) { let { hero: e } = t; r = e && e.backgroundColor ? `background-color:${e.backgroundColor}` : "" } return `<div class="t1Hero" style="${r}">\x3c!-- inner --\x3e</div>` } function header_struc(e) { let { styles: t } = e, r = ""; if (t) { let { header: e } = t; r = e && e.backgroundColor ? `background-color:${e.backgroundColor}` : "" } return `<div class="t1Header" style="${r}">\x3c!-- inner --\x3e</div>` } function body_struc(e) { let { footer: t, styles: r } = e, i = ""; if (r) { let { body: e } = r; i = e && e.backgroundColor ? `background-color:${e.backgroundColor}` : "" } return `<div class="t1Body ${t ? "ExHasFooter" : ""}" style="${i}">\x3c!-- inner --\x3e</div>` } function footer_struc(e) { let { styles: t } = e, r = ""; if (t) { let { footer: e } = t; r = e && e.backgroundColor ? `background-color:${e.backgroundColor}` : "" } return `<div class="t1Footer" style="${r}">\x3c!-- inner --\x3e</div>` } function text_object(e) { let t = "", { flex: r, margin: i, size: l, position: o, align: a, gravity: x, text: n, color: d, weight: c, style: s, decoration: p, wrap: $, maxLines: f, adjustMode: b, offsetTop: g, offsetBottom: u, offsetStart: y, offsetEnd: E, lineSpacing: m } = e; if (fl = "", r > 3 ? t += `-webkit-box-flex:${r};flex-grow:${r};` : fl = r >= 0 ? `fl${r}` : "", exabs = "absolute" === o ? "ExAbs" : "", i && i.indexOf("px") >= 0 ? (t += `margin-top:${i};`, exmgn = "") : exmgn = i ? "ExMgnL" + upperalldigit(i) : "", alg = "start" === a || "end" === a || "center" === a ? "ExAlg" + upper1digit(a) : "", grv = "bottom" === x || "center" === x ? "grv" + upper1digit(x) : "", l = l && "" !== l ? l : "md", l.indexOf("px") >= 0 ? (t += `font-size:${l};`, l = "") : l = "Ex" + upperalldigit(l), d && "" !== d && (t += `color:${d};`), ExWB = "bold" === c ? "ExWB" : "", ExFntSty = "normal" === s ? "ExFntStyNml" : "italic" === s ? "ExFntStyIt" : "", ExTxtDec = "line-through" === p ? "ExTxtDecLt" : "underline" === p ? "ExTxtDecUl" : "none" === p ? "ExTxtDecNone" : "", ExWrap = !0 === $ ? "ExWrap" : "", g && g.indexOf("px") >= 0 ? (t += `top:${g};`, ext = "") : ext = g ? "ExT" + upperalldigit(g) : "", u && u.indexOf("px") >= 0 ? (t += `bottom:${u};`, exb = "") : exb = u ? "ExB" + upperalldigit(u) : "", y && y.indexOf("px") >= 0 ? (t += `left:${y};`, exl = "") : exl = y ? "ExL" + upperalldigit(y) : "", E && E.indexOf("px") >= 0 ? (t += `right:${E};`, exr = "") : exr = E ? "ExR" + upperalldigit(E) : "", m && m.indexOf("px") >= 0) { t += `line-height:${parseInt(m.replace("px", "")) + 15 + "px"};` } return n = n || "", `<div class="MdTxt ${fl} ${exabs} ${exmgn} ${alg} ${grv} ${l} ${ExWB} ${ExFntSty} ${ExTxtDec} ${ExWrap} ${ext} ${exb} ${exl} ${exr}" style="${t}"><p>${n}\x3c!-- content --\x3e</p></div>` } function upper1digit(e) { return e.charAt(0).toUpperCase() } function upper2digit(e) { return e.charAt(0).toUpperCase() + e.substring(1, 2) } function upperalldigit(e) { return e.charAt(0).toUpperCase() + e.slice(1) }
