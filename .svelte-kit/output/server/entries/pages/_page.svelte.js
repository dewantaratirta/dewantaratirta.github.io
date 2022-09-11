import { c as create_ssr_component, h as each, f as escape, v as validate_component, i as createEventDispatcher, m as missing_component, b as add_attribute } from "../../chunks/index.js";
import { _ as __variableDynamicImportRuntimeHelper } from "../../chunks/dynamic-import-helper.js";
const GenerateTags_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".tag.svelte-3n6kf2.svelte-3n6kf2{border:1px solid var(--secondary-focus);border-radius:20px;margin:5px;padding:2px 12px;font-size:12px;line-height:16px;height:28px;display:inline-flex;align-content:center;justify-content:center;flex-direction:row;align-items:center;background:var(--card-background-color)}.tag.has-icon.svelte-3n6kf2 span.svelte-3n6kf2{margin-left:5px}",
  map: null
};
const GenerateTags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tags = [] } = $$props;
  let { height = "20px" } = $$props;
  let { width = "20px" } = $$props;
  let taglist = {
    JavaScript: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"   viewBox="0 0 48 48" width="48px" height="48px"><path fill="#ffd600" d="M6,42V6h36v36H6z"/><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/></svg>`,
    PHP: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 80 80" width="30px" height="30px"><path fill="#dcd5f2" d="M40,61.5C18.22,61.5,0.5,51.855,0.5,40S18.22,18.5,40,18.5S79.5,28.145,79.5,40S61.78,61.5,40,61.5z"/><path fill="#8b75a1" d="M40,19c21.505,0,39,9.421,39,21S61.505,61,40,61S1,51.579,1,40S18.495,19,40,19 M40,18 C17.909,18,0,27.85,0,40s17.909,22,40,22s40-9.85,40-22S62.091,18,40,18L40,18z"/><path fill="#36404d" d="M25.112 34c1.725 0 3.214.622 4.084 1.706.749.934.981 2.171.668 3.577C29.023 43.074 27.395 44 21.57 44h-4.14l1.75-10H25.112M25.112 32H17.5L14 52h2l1.056-6h4.515c5.863 0 9.053-.905 10.246-6.284C32.842 35.096 29.436 32 25.112 32L25.112 32zM61.112 34c1.725 0 3.214.622 4.084 1.706.749.934.981 2.171.668 3.577C65.023 43.074 63.395 44 57.57 44h-4.14l1.75-10H61.112M61.112 32H53.5L50 52h2l1.056-6h4.515c5.863 0 9.053-.905 10.246-6.284C68.842 35.096 65.436 32 61.112 32L61.112 32z"/><g><path fill="#36404d" d="M49.072,33.212C48.193,32.348,46.644,32,44.334,32h-5.538L40,26h-2.1L34,46h1.99l2.388-12h0.419 h5.538c2.338,0,3.094,0.4,3.335,0.637c0.343,0.338,0.424,1.226,0.217,2.363l-1.767,9h2.106l1.626-8.63 C50.199,35.462,49.936,34.062,49.072,33.212z"/></g></svg>`
  };
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  $$result.css.add(css$5);
  return `${tags.length > 0 ? `${each(tags, (tag) => {
    return `${taglist.hasOwnProperty(tag) ? `<code class="${"tag has-icon svelte-3n6kf2"}"><!-- HTML_TAG_START -->${taglist[tag]}<!-- HTML_TAG_END --> <span class="${"svelte-3n6kf2"}">${escape(tag)}</span></code>` : `<code class="${"tag svelte-3n6kf2"}"><span>#${escape(tag)}</span></code>`}`;
  })}` : ``}`;
});
const ProfileHeader_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".heading.svelte-or7pbz.svelte-or7pbz{margin-bottom:0px}header.svelte-or7pbz.svelte-or7pbz{margin:0px;width:100%;display:flex;justify-content:space-around;align-items:flex-start}header.svelte-or7pbz .left.svelte-or7pbz,header.svelte-or7pbz .right.svelte-or7pbz{padding:10px}header.svelte-or7pbz .left.svelte-or7pbz{display:flex;flex-direction:column;justify-content:center}header.svelte-or7pbz .left .text-alt.svelte-or7pbz{padding:0px;margin-top:10px}.right.svelte-or7pbz img.svelte-or7pbz{border-radius:20em;max-width:180px}.tags-container.svelte-or7pbz.svelte-or7pbz{display:flex}@media(max-width: 1200px){.right.svelte-or7pbz img.svelte-or7pbz{max-width:80px}}",
  map: null
};
const ProfileHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tags = ["JavaScript", "PHP", "fullstack"];
  $$result.css.add(css$4);
  return `<header class="${"svelte-or7pbz"}"><div class="${"left svelte-or7pbz"}"><hgroup class="${"heading svelte-or7pbz"}"><h2>Dewantara Tirta Putra</h2>
			<p>Hello, im fullstack web developer based on Yogyakarta.<br>
				<code class="${"text-alt svelte-or7pbz"}">Currently Working as Backend Engineer @ ICUBE by Sirclo</code></p>
			<div class="${"tags-container svelte-or7pbz"}">${validate_component(GenerateTags, "GenerateTags").$$render($$result, { tags }, {}, {})}</div></hgroup></div>
	<div class="${"right svelte-or7pbz"}"><img src="${"img/pp.webp"}" alt="${""}" class="${"svelte-or7pbz"}"></div>
</header>`;
});
const allPostFiles = /* @__PURE__ */ Object.assign({ "../../../routes/portfolio/adira-finance.md": () => import("../../chunks/adira-finance.js"), "../../../routes/portfolio/infest-inkubasi.md": () => import("../../chunks/infest-inkubasi.js"), "../../../routes/portfolio/sapa-budaya.md": () => import("../../chunks/sapa-budaya.js") });
const iterablePostFiles = Object.entries(allPostFiles);
let defaultImage = "./img/placeholder.webp";
const getAllMetadata = async () => {
  let allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      let { metadata } = await resolver();
      let postSlug = path.split("/").pop().slice(0, -3);
      metadata.header_image = !metadata.header_image ? defaultImage : "./portfolio/" + metadata.header_image;
      return {
        meta: metadata,
        slug: postSlug
      };
    })
  );
  const sortedPosts = await allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });
  return sortedPosts;
};
const Popup_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "dialog.svelte-oi14fp article header span.svelte-oi14fp{cursor:pointer}dialog.svelte-oi14fp article.svelte-oi14fp{width:100%}",
  map: null
};
const Popup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  let { show = 0 } = $$props;
  let { slug = null } = $$props;
  let Project = null;
  let metadata = null;
  const toggle = () => {
    !show ? close() : open();
  };
  const close = () => {
    show = 0;
    dispatch("popupChange", { show, slug, fn: "close" });
    Project = null;
    metadata = null;
  };
  const open = async (slugName) => {
    slug = slugName;
    console.log(slug);
    show = 1;
    dispatch("popupChange", { show, slug, fn: "open" });
    Project = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../routes/portfolio/adira-finance.md": () => import("../../chunks/adira-finance.js"), "../../../routes/portfolio/infest-inkubasi.md": () => import("../../chunks/infest-inkubasi.js"), "../../../routes/portfolio/sapa-budaya.md": () => import("../../chunks/sapa-budaya.js") }), `../../../routes/portfolio/${slugName}.md`).then((res) => {
      metadata = res.metadata;
      console.log(metadata);
      return res.default;
    });
  };
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0)
    $$bindings.close(close);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$3);
  return `${show && Project != null ? `<dialog open class="${"svelte-oi14fp"}"><article class="${"svelte-oi14fp"}"><header><span aria-label="${"Close"}" class="${"close svelte-oi14fp"}"></span>
				${escape(metadata.title)}</header>
			${validate_component(Project || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article></dialog>` : ``}

`;
});
const ShowAll_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-bvay8u.svelte-bvay8u{margin:1.4em 0px}.container.svelte-bvay8u .row.svelte-bvay8u{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:1.4em}.project-thumbnail.svelte-bvay8u.svelte-bvay8u{border-radius:var(--border-radius);box-shadow:var(--card-box-shadow);overflow:hidden;padding:0px;cursor:pointer}.project-thumbnail.svelte-bvay8u .card-body.svelte-bvay8u{padding:calc(var(--bs-gutter-x) * 0.5)}.project-thumbnail.svelte-bvay8u .image.svelte-bvay8u{width:100%;height:15vmin;background-position:center;background-repeat:no-repeat;background-size:cover;background-color:var(--secondary)}.project-thumbnail.svelte-bvay8u h6.svelte-bvay8u{font-size:0.9em;margin-bottom:calc(var(--bs-gutter-x) * 0.5)}.project-thumbnail.svelte-bvay8u p.svelte-bvay8u{font-size:0.75em}@media(max-width: 767px){.container.svelte-bvay8u .row.svelte-bvay8u{grid-template-columns:repeat(1, minmax(0, 1fr))}.project-thumbnail.svelte-bvay8u .image.svelte-bvay8u{height:15vmax}}html[data-theme='light'] .project-thumbnail{background:radial-gradient(circle at top left, hsl(205deg, 20%, 94%) 10%, #fff 90%)}html[data-theme='dark'] .project-thumbnail{background:radial-gradient(circle at top left, #18232c 10%, #141e26 90%)}html[data-theme='dark'] .project-thumbnail:hover{background:radial-gradient(circle at top left, hsl(205deg 29% 22%) 10%, #1f2d38 90%)}",
  map: null
};
const ShowAll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let popupComp;
  var data = [];
  getAllMetadata().then((res) => {
    data = res;
  });
  let popupShow = 0;
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Popup, "Popup").$$render(
      $$result,
      { show: popupShow, this: popupComp },
      {
        this: ($$value) => {
          popupComp = $$value;
          $$settled = false;
        }
      },
      {}
    )}

<div class="${"container svelte-bvay8u"}">${data.length == 0 ? `Loading...` : `<div class="${"row svelte-bvay8u"}">${each(data, (project) => {
      return `<div class="${"project-thumbnail svelte-bvay8u"}"><div class="${"image svelte-bvay8u"}"${add_attribute("style", `background-image: url(${project.meta.header_image})`, 0)}></div>
					<div class="${"card-body svelte-bvay8u"}"><h6 class="${"svelte-bvay8u"}">${escape(project.meta.title)}</h6>
						<p class="${"svelte-bvay8u"}">${escape(project.meta.description)}</p></div>
				</div>`;
    })}</div>`}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const ProfileBody_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".body.svelte-5jb5tf.svelte-5jb5tf{padding:calc(var(--block-spacing-vertical) * .66) var(--block-spacing-horizontal);margin:0px 10px}ul.svelte-5jb5tf li.svelte-5jb5tf{color:var(--secondary);border-bottom:4px solid transparent;transition:1s color, 1s border;cursor:pointer;margin-right:10px}ul.svelte-5jb5tf li.svelte-5jb5tf:hover:not(.active){color:var(--secondary-hover);border-bottom:4px solid var(--secondary-hover)}ul.svelte-5jb5tf li.active.svelte-5jb5tf{color:var(--h3-color);border-bottom:4px solid var(--h3-color)}",
  map: null
};
const ProfileBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"body svelte-5jb5tf"}"><nav><ul class="${"svelte-5jb5tf"}"><li class="${"active svelte-5jb5tf"}"><strong>Project</strong></li>
            <li class="${"svelte-5jb5tf"}"><strong>Resume</strong></li>
            <li class="${"svelte-5jb5tf"}"><strong>Contact</strong></li></ul></nav>

    <div>${validate_component(ShowAll, "ShowAll").$$render($$result, {}, {}, {})}</div>
</div>`;
});
const Profile_svelte_svelte_type_style_lang = "";
const css = {
  code: ".profile.svelte-ur9aka{padding:0px}",
  map: null
};
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container"}"><article class="${"profile svelte-ur9aka"}">${validate_component(ProfileHeader, "ProfileHeader").$$render($$result, {}, {}, {})}
		${validate_component(ProfileBody, "ProfileBody").$$render($$result, {}, {}, {})}</article>

</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Profile, "Profile").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
