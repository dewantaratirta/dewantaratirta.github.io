import { c as create_ssr_component, f as escape, h as each, v as validate_component, i as createEventDispatcher, m as missing_component, b as add_attribute, j as null_to_empty } from "./index.js";
const GenerateTags_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".tag.svelte-1t15so3.svelte-1t15so3{border:1px solid var(--secondary-focus);border-radius:20px;margin:5px;padding:2px 12px;font-size:12px;line-height:16px;height:28px;display:inline-flex;align-content:center;justify-content:center;flex-direction:row;align-items:center;background:var(--card-background-color)}.tag.has-icon.svelte-1t15so3 span.svelte-1t15so3{margin-left:5px}.tags-container.svelte-1t15so3.svelte-1t15so3{display:flex;flex-wrap:wrap}@media(max-width: 600px){.tags-container.svelte-1t15so3.svelte-1t15so3{width:100%;display:flex;align-content:center;align-items:center}.tags-container.mobile-center.svelte-1t15so3.svelte-1t15so3{justify-content:center}}",
  map: null
};
const GenerateTags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tags = [] } = $$props;
  let { height = "20px" } = $$props;
  let { width = "20px" } = $$props;
  let { mobileCenter = false } = $$props;
  let taglist = {
    js: {
      alias: "JavaScript",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"   viewBox="0 0 48 48" width="48px" height="48px"><path fill="#ffd600" d="M6,42V6h36v36H6z"/><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/></svg>`
    },
    vanilla: {
      alias: "Vanilla JS",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"   viewBox="0 0 48 48" width="48px" height="48px"><path fill="#ffd600" d="M6,42V6h36v36H6z"/><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/></svg>`
    },
    php: {
      alias: "PHP",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 80 80" width="30px" height="30px"><path fill="#dcd5f2" d="M40,61.5C18.22,61.5,0.5,51.855,0.5,40S18.22,18.5,40,18.5S79.5,28.145,79.5,40S61.78,61.5,40,61.5z"/><path fill="#8b75a1" d="M40,19c21.505,0,39,9.421,39,21S61.505,61,40,61S1,51.579,1,40S18.495,19,40,19 M40,18 C17.909,18,0,27.85,0,40s17.909,22,40,22s40-9.85,40-22S62.091,18,40,18L40,18z"/><path fill="#36404d" d="M25.112 34c1.725 0 3.214.622 4.084 1.706.749.934.981 2.171.668 3.577C29.023 43.074 27.395 44 21.57 44h-4.14l1.75-10H25.112M25.112 32H17.5L14 52h2l1.056-6h4.515c5.863 0 9.053-.905 10.246-6.284C32.842 35.096 29.436 32 25.112 32L25.112 32zM61.112 34c1.725 0 3.214.622 4.084 1.706.749.934.981 2.171.668 3.577C65.023 43.074 63.395 44 57.57 44h-4.14l1.75-10H61.112M61.112 32H53.5L50 52h2l1.056-6h4.515c5.863 0 9.053-.905 10.246-6.284C68.842 35.096 65.436 32 61.112 32L61.112 32z"/><g><path fill="#36404d" d="M49.072,33.212C48.193,32.348,46.644,32,44.334,32h-5.538L40,26h-2.1L34,46h1.99l2.388-12h0.419 h5.538c2.338,0,3.094,0.4,3.335,0.637c0.343,0.338,0.424,1.226,0.217,2.363l-1.767,9h2.106l1.626-8.63 C50.199,35.462,49.936,34.062,49.072,33.212z"/></g></svg>`
    },
    reactjs: {
      alias: "React JS",
      icon: `<svg width="${width}" height="${height}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_7_2)"><path d="M100 144.5C42.99 144.5 0 125.85 0 100C0 74.15 42.99 55 100 55C157.01 55 200 74.15 200 100C200 125.85 157.01 144.5 100 144.5ZM100 69.66C51.355 69.66 14.375 85.99 14.375 100.315C14.375 114.64 51.355 130.34 100 130.34C148.645 130.34 185.625 114.01 185.625 99.685C185.625 85.36 148.645 69.66 100 69.66Z" fill="#4E7AB5"/><path d="M62.01 190C62.005 190 62.01 190 62.01 190C57.355 190 53.105 188.92 49.37 186.79C43.27 183.305 38.895 177.15 36.71 168.98C30.98 147.57 40.225 111.57 60.275 77.26C83.8 37.035 115.035 10.015 137.995 10.015C142.645 10.015 146.895 11.095 150.63 13.225C156.72 16.7 161.1 22.85 163.285 31.015C169.02 52.425 159.77 88.43 139.71 122.74C116.205 162.97 84.975 190 62.01 190ZM137.995 25.015C123.555 25.015 95.95 45.98 73.225 84.83C52.61 120.11 46.565 149.375 51.205 165.1C52.46 169.345 54.23 172.29 56.81 173.76C68.615 180.5 100.855 159.51 126.765 115.175C147.39 79.89 154.065 51.25 148.795 34.9C147.44 30.695 145.775 27.725 143.2 26.26C141.735 25.42 140.03 25.015 137.995 25.015Z" fill="#4E7AB5"/><path d="M137.995 189.985C115.01 189.98 83.78 162.96 60.275 122.74C40.225 88.43 30.98 52.425 36.71 31.02C38.895 22.85 43.27 16.695 49.365 13.215C53.105 11.08 57.355 10 62 10C84.975 10 116.2 37.03 139.71 77.26C159.765 111.565 169.01 147.57 163.28 168.985C161.09 177.15 156.715 183.3 150.63 186.775C146.895 188.905 142.64 189.985 137.995 189.985ZM62 25C59.965 25 58.265 25.41 56.8 26.24C54.225 27.71 52.43 30.645 51.2 34.9C46.56 50.94 52.605 79.895 73.22 115.175C95.925 154.02 123.535 174.985 137.99 174.985C140.03 174.985 141.73 174.575 143.195 173.74C145.765 172.28 147.61 169.36 148.785 165.1C153.12 149.37 147.38 120.1 126.76 84.825C104.055 45.97 76.45 25 62 25Z" fill="#4E7AB5"/><path d="M117.5 100C117.5 109.675 109.675 117.5 100 117.5C90.325 117.5 82.5 109.675 82.5 100C82.5 90.325 90.325 82.5 100 82.5C109.675 82.5 117.5 90.325 117.5 100Z" fill="#8BB7F0"/><path d="M100 120C88.97 120 80 111.03 80 100C80 88.97 88.97 80 100 80C111.03 80 120 88.97 120 100C120 111.03 111.03 120 100 120ZM100 85C91.73 85 85 91.73 85 100C85 108.27 91.73 115 100 115C108.27 115 115 108.27 115 100C115 91.73 108.27 85 100 85Z" fill="#4E7AB5"/><path d="M100 140.34C46.73 140.34 5 122.62 5 100C5 77.38 46.73 59.66 100 59.66C153.27 59.66 195 77.38 195 100C195 122.62 153.27 140.34 100 140.34ZM100 64.66C51.215 64.66 10 80.845 10 100C10 119.155 51.215 135.34 100 135.34C148.785 135.34 190 119.16 190 100C190 80.84 148.785 64.66 100 64.66Z" fill="#8BB7F0"/><path d="M62.01 185C62.005 185 62.01 185 62.01 185C58.235 185 54.82 184.14 51.845 182.445C46.865 179.6 43.4 174.635 41.535 167.685C36.13 147.5 45.18 112.995 64.585 79.78C86.895 41.65 117.08 15.015 137.995 15.015C141.765 15.015 145.185 15.875 148.155 17.57C153.13 20.41 156.595 25.37 158.46 32.31C163.865 52.495 154.815 87 135.4 120.22C113.105 158.36 82.93 185 62.01 185ZM137.995 20.015C119.075 20.015 90.02 46.21 68.91 82.305C50.435 113.93 41.375 147.72 46.37 166.395C47.875 172.01 50.55 175.945 54.33 178.105C56.535 179.36 59.115 180 62.005 180C80.93 180 109.98 153.8 131.075 117.695C149.56 86.065 158.625 52.27 153.62 33.605C152.12 28 149.445 24.065 145.67 21.915C143.465 20.655 140.885 20.015 137.995 20.015Z" fill="#8BB7F0"/><path d="M137.995 184.985C117.06 184.98 86.875 158.35 64.59 120.22C45.18 87.005 36.135 52.5 41.54 32.315C43.4 25.365 46.865 20.4 51.85 17.555C54.82 15.86 58.235 15 62 15C82.925 15 113.105 41.64 135.395 79.78C154.81 112.99 163.855 147.495 158.445 167.69C156.59 174.635 153.125 179.595 148.15 182.43C145.18 184.125 141.765 184.985 137.995 184.985ZM62 20C59.115 20 56.53 20.64 54.325 21.895C50.545 24.055 47.87 27.99 46.365 33.605C41.37 52.275 50.43 86.07 68.905 117.695C90 153.785 119.06 179.98 137.995 179.985C140.885 179.985 143.47 179.345 145.675 178.085C149.445 175.935 152.12 172 153.62 166.395C158.62 147.72 149.56 113.925 131.08 82.305C109.98 46.205 80.935 20 62 20Z" fill="#8BB7F0"/></g><defs><clipPath id="clip0_7_2"><rect width="200" height="200" fill="white"/></clipPath></defs></svg>`
    },
    reactnative: {
      alias: "React Native",
      icon: `<svg width="${width}" height="${height}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_7_2)"><path d="M100 144.5C42.99 144.5 0 125.85 0 100C0 74.15 42.99 55 100 55C157.01 55 200 74.15 200 100C200 125.85 157.01 144.5 100 144.5ZM100 69.66C51.355 69.66 14.375 85.99 14.375 100.315C14.375 114.64 51.355 130.34 100 130.34C148.645 130.34 185.625 114.01 185.625 99.685C185.625 85.36 148.645 69.66 100 69.66Z" fill="#4E7AB5"/><path d="M62.01 190C62.005 190 62.01 190 62.01 190C57.355 190 53.105 188.92 49.37 186.79C43.27 183.305 38.895 177.15 36.71 168.98C30.98 147.57 40.225 111.57 60.275 77.26C83.8 37.035 115.035 10.015 137.995 10.015C142.645 10.015 146.895 11.095 150.63 13.225C156.72 16.7 161.1 22.85 163.285 31.015C169.02 52.425 159.77 88.43 139.71 122.74C116.205 162.97 84.975 190 62.01 190ZM137.995 25.015C123.555 25.015 95.95 45.98 73.225 84.83C52.61 120.11 46.565 149.375 51.205 165.1C52.46 169.345 54.23 172.29 56.81 173.76C68.615 180.5 100.855 159.51 126.765 115.175C147.39 79.89 154.065 51.25 148.795 34.9C147.44 30.695 145.775 27.725 143.2 26.26C141.735 25.42 140.03 25.015 137.995 25.015Z" fill="#4E7AB5"/><path d="M137.995 189.985C115.01 189.98 83.78 162.96 60.275 122.74C40.225 88.43 30.98 52.425 36.71 31.02C38.895 22.85 43.27 16.695 49.365 13.215C53.105 11.08 57.355 10 62 10C84.975 10 116.2 37.03 139.71 77.26C159.765 111.565 169.01 147.57 163.28 168.985C161.09 177.15 156.715 183.3 150.63 186.775C146.895 188.905 142.64 189.985 137.995 189.985ZM62 25C59.965 25 58.265 25.41 56.8 26.24C54.225 27.71 52.43 30.645 51.2 34.9C46.56 50.94 52.605 79.895 73.22 115.175C95.925 154.02 123.535 174.985 137.99 174.985C140.03 174.985 141.73 174.575 143.195 173.74C145.765 172.28 147.61 169.36 148.785 165.1C153.12 149.37 147.38 120.1 126.76 84.825C104.055 45.97 76.45 25 62 25Z" fill="#4E7AB5"/><path d="M117.5 100C117.5 109.675 109.675 117.5 100 117.5C90.325 117.5 82.5 109.675 82.5 100C82.5 90.325 90.325 82.5 100 82.5C109.675 82.5 117.5 90.325 117.5 100Z" fill="#8BB7F0"/><path d="M100 120C88.97 120 80 111.03 80 100C80 88.97 88.97 80 100 80C111.03 80 120 88.97 120 100C120 111.03 111.03 120 100 120ZM100 85C91.73 85 85 91.73 85 100C85 108.27 91.73 115 100 115C108.27 115 115 108.27 115 100C115 91.73 108.27 85 100 85Z" fill="#4E7AB5"/><path d="M100 140.34C46.73 140.34 5 122.62 5 100C5 77.38 46.73 59.66 100 59.66C153.27 59.66 195 77.38 195 100C195 122.62 153.27 140.34 100 140.34ZM100 64.66C51.215 64.66 10 80.845 10 100C10 119.155 51.215 135.34 100 135.34C148.785 135.34 190 119.16 190 100C190 80.84 148.785 64.66 100 64.66Z" fill="#8BB7F0"/><path d="M62.01 185C62.005 185 62.01 185 62.01 185C58.235 185 54.82 184.14 51.845 182.445C46.865 179.6 43.4 174.635 41.535 167.685C36.13 147.5 45.18 112.995 64.585 79.78C86.895 41.65 117.08 15.015 137.995 15.015C141.765 15.015 145.185 15.875 148.155 17.57C153.13 20.41 156.595 25.37 158.46 32.31C163.865 52.495 154.815 87 135.4 120.22C113.105 158.36 82.93 185 62.01 185ZM137.995 20.015C119.075 20.015 90.02 46.21 68.91 82.305C50.435 113.93 41.375 147.72 46.37 166.395C47.875 172.01 50.55 175.945 54.33 178.105C56.535 179.36 59.115 180 62.005 180C80.93 180 109.98 153.8 131.075 117.695C149.56 86.065 158.625 52.27 153.62 33.605C152.12 28 149.445 24.065 145.67 21.915C143.465 20.655 140.885 20.015 137.995 20.015Z" fill="#8BB7F0"/><path d="M137.995 184.985C117.06 184.98 86.875 158.35 64.59 120.22C45.18 87.005 36.135 52.5 41.54 32.315C43.4 25.365 46.865 20.4 51.85 17.555C54.82 15.86 58.235 15 62 15C82.925 15 113.105 41.64 135.395 79.78C154.81 112.99 163.855 147.495 158.445 167.69C156.59 174.635 153.125 179.595 148.15 182.43C145.18 184.125 141.765 184.985 137.995 184.985ZM62 20C59.115 20 56.53 20.64 54.325 21.895C50.545 24.055 47.87 27.99 46.365 33.605C41.37 52.275 50.43 86.07 68.905 117.695C90 153.785 119.06 179.98 137.995 179.985C140.885 179.985 143.47 179.345 145.675 178.085C149.445 175.935 152.12 172 153.62 166.395C158.62 147.72 149.56 113.925 131.08 82.305C109.98 46.205 80.935 20 62 20Z" fill="#8BB7F0"/></g><defs><clipPath id="clip0_7_2"><rect width="200" height="200" fill="white"/></clipPath></defs></svg>`
    },
    ci: {
      alias: "Codeigniter",
      icon: `<svg width="${width}" height="${height}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M76.9603 178.822C67.5393 174.75 58.7235 164.4 58.7025 153.81C58.6768 142.264 65.9939 132.461 75.0946 126.019C74.0005 130.153 73.4038 133.934 76.1143 137.631C78.634 141.068 83.0472 142.739 87.2143 141.832C96.9511 139.701 97.3978 128.997 91.6255 122.761C85.9182 116.585 80.3972 109.609 82.5696 100.653C83.6571 96.1638 86.4136 91.9586 89.9057 88.9526C87.2215 96.0066 94.8492 102.963 99.8748 106.428C108.593 112.44 118.158 116.984 126.174 124.031C134.605 131.437 140.831 141.452 139.574 153.067C138.212 165.657 128.208 174.413 116.987 178.833C140.699 173.599 165.199 155.196 165.701 128.899C166.117 107.264 151.275 90.6138 132.891 81.0816L131.93 80.5572C132.435 81.7816 132.6 82.823 132.581 83.7553C132.745 83.0678 132.857 82.3612 132.889 81.6322C132.884 82.4982 132.771 83.3602 132.552 84.198L132.581 83.7553C132.308 84.9039 131.848 85.9998 131.22 86.9993L131.489 86.7092C127.822 92.7928 117.892 94.1138 112.987 87.8145C105.101 77.6816 113.152 66.7566 114.278 56.0263C115.688 42.5783 107.254 29.523 96.7978 21.7105C102.557 31.027 94.9696 43.3526 88.8992 50.2434C83.013 56.923 75.8544 62.5 69.3564 68.5691C62.3761 75.0875 55.6656 81.9539 49.9281 89.6046C38.4531 104.918 31.4281 124.177 36.5906 143.281C41.7498 162.372 58.2867 174.524 76.961 178.822L76.9603 178.822Z" fill="#EE4323"/></svg>`
    },
    socket: {
      alias: "Socket.io",
      icon: `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" fill="#010101"><path d="M63.988 31.295c-.174-10.7-6.14-21.118-15.37-26.604C41.346.162 32.16-1.057 23.886 1.033 11.433 4.168 1.505 15.446.243 28.3-1.325 40.44 4.815 53.066 15.308 59.292c10.276 6.444 24.253 6.183 34.3-.6 9.057-5.878 14.674-16.6 14.37-27.388zM33.77 59.25c-14.543 1.437-28.607-10.885-29-25.472-1.1-11.843 6.705-23.556 17.852-27.475C38.254.033 57.456 11.615 59.067 28.38c2.526 15.064-10.014 30.4-25.297 30.87zM24.2 30.38l21.03-17.2-11.364 17.243c-3.222 0-6.444 0-9.666-.044zm5.913 3.18l9.666.044-21.03 17.243L30.113 33.56z"/></svg>`
    },
    vue: {
      alias: "Vue",
      icon: `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48"  width="${width}" height="${height}"><polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"/><polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"/></svg>`
    },
    svelte: {
      alias: "Svelte",
      icon: `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" aria-label="Svelte" role="img" viewBox="0 0 512 512"><path fill="#ff3e00" d="M395 115c-35-51-106-66-157-34l-89 57a103 103 0 00-46 69 108 108 0 0010 69 103 103 0 00-15 39 109 109 0 0019 82c35 51 106 66 157 34l89-57a103 103 0 0046-69 108 108 0 00-10-69 103 103 0 0015-39 109 109 0 00-19-82"/><path fill="#fff" d="M230 402a71 71 0 01-77-28 66 66 0 01-11-50 62 62 0 012-8l2-5 5 3a115 115 0 0035 17l3 1v4a20 20 0 003 13 21 21 0 0023 9 20 20 0 006-3l89-57a19 19 0 008-12 20 20 0 00-3-15 21 21 0 00-23-9 20 20 0 00-5 3l-34 21a65 65 0 01-19 8 71 71 0 01-76-28 66 66 0 01-11-50 62 62 0 0128-41l89-57a65 65 0 0118-8 71 71 0 0177 28 66 66 0 0111 50 63 63 0 01-2 8l-2 5-5-3a115 115 0 00-35-17l-3-1v-4a20 20 0 00-3-13 21 21 0 00-23-9 20 20 0 00-6 3l-89 57a19 19 0 00-8 12 20 20 0 003 15 21 21 0 0023 9 20 20 0 005-3l34-21a65 65 0 0119-8 71 71 0 0176 28 66 66 0 0111 50 62 62 0 01-28 41l-89 57a65 65 0 01-18 8"/></svg>`
    },
    jquery: {
      alias: "jQuery",
      icon: `<svg width="${width}" height="${height}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_8_17)"><path d="M4.288 15.41C-1.372 23.55 -0.672001 34.138 3.656 42.81C3.756 43.018 3.866 43.222 3.972 43.426L4.172 43.816C4.212 43.892 4.256 43.966 4.298 44.04C4.372 44.18 4.448 44.308 4.524 44.444L4.938 45.152L5.174 45.54L5.654 46.29L5.858 46.606C6.084 46.942 6.314 47.278 6.552 47.606L6.688 47.79C6.89416 48.0734 7.10486 48.3534 7.32 48.63L7.56 48.934L8.144 49.654L8.368 49.922C8.634 50.236 8.908 50.548 9.182 50.852C9.21 50.882 9.222 50.892 9.23 50.904C9.50171 51.1987 9.77774 51.4894 10.058 51.776L10.324 52.044L10.984 52.692L11.254 52.952C11.551 53.2321 11.8531 53.5068 12.16 53.776L13.152 54.616L13.492 54.888L14.178 55.424L14.544 55.704L15.314 56.256L15.674 56.51C15.92 56.68 16.17 56.842 16.422 57.004L16.746 57.22C17.132 57.4651 17.5221 57.7038 17.916 57.936L18.24 58.136L19.12 58.628C19.28 58.714 19.444 58.796 19.606 58.878L20.234 59.204L20.38 59.274L20.64 59.398L21.636 59.858L21.846 59.952C22.2305 60.1195 22.6179 60.2802 23.008 60.434L23.288 60.546L24.384 60.952L24.524 61C24.9287 61.1393 25.3354 61.2727 25.744 61.4L26.04 61.488C26.44 61.614 26.872 61.768 27.3 61.844C54.688 66.838 62.64 45.384 62.64 45.384C55.96 54.088 44.1 56.384 32.84 53.828C32.414 53.732 32 53.6 31.586 53.476L31.274 53.382C30.8691 53.2575 30.4664 53.1262 30.066 52.988L29.9 52.928C29.5436 52.8015 29.1889 52.6701 28.836 52.534L28.536 52.414C28.1494 52.2619 27.766 52.1019 27.386 51.934L27.156 51.834L26.186 51.382L25.906 51.248C25.654 51.128 25.406 50.994 25.156 50.848L24.656 50.588C24.352 50.428 24.056 50.256 23.756 50.084L23.452 49.914C23.0583 49.6815 22.6682 49.4428 22.282 49.198C22.176 49.13 22.072 49.058 21.966 48.988L21.134 48.434C21.042 48.374 20.934 48.306 20.866 48.246L20.078 47.676L19.728 47.412L19.018 46.856L18.702 46.602L17.818 45.856C17.7859 45.8279 17.7525 45.8012 17.718 45.776L16.788 44.93L16.528 44.678L15.864 44.018L15.604 43.758C15.324 43.472 15.052 43.184 14.804 42.89C14.79 42.876 14.776 42.862 14.764 42.846C14.4808 42.5352 14.2034 42.2191 13.932 41.898L13.732 41.638L13.132 40.898L12.932 40.624L12.24 39.704C5.964 31.2 3.72 19.444 8.708 9.804M21.868 8.554C17.772 14.448 17.994 22.354 21.188 28.57C21.7232 29.6177 22.3286 30.628 23 31.594C23.614 32.474 24.294 33.52 25.108 34.226C25.404 34.552 25.712 34.866 26.028 35.18L26.268 35.42C26.5737 35.7181 26.8864 36.0088 27.206 36.292C27.22 36.302 27.23 36.316 27.246 36.326C27.61 36.646 27.978 36.926 28.352 37.242L28.6 37.436C28.9752 37.7254 29.358 38.0048 29.748 38.274L29.782 38.298C29.954 38.418 30.13 38.528 30.306 38.644C30.39 38.698 30.47 38.756 30.554 38.808C30.8336 38.9874 31.117 39.1608 31.404 39.328L31.524 39.398L32.276 39.798C32.364 39.848 32.476 39.89 32.544 39.938L33.07 40.21C33.096 40.224 33.124 40.234 33.15 40.246C33.5108 40.4257 33.8762 40.5957 34.246 40.756L34.486 40.856C34.7839 40.9825 35.0839 41.1038 35.386 41.22L35.77 41.36C36.0439 41.4595 36.3192 41.5549 36.596 41.646L36.97 41.766C37.364 41.886 37.77 42.046 38.164 42.112C59.31 45.616 64.192 29.312 64.192 29.312C59.792 35.652 51.272 38.672 42.176 36.312C41.774 36.2062 41.3745 36.0909 40.978 35.966C40.858 35.93 40.738 35.89 40.618 35.85L39.778 35.562L39.378 35.422C39.0761 35.3055 38.776 35.1842 38.478 35.058L38.234 34.958C37.8619 34.7963 37.4938 34.6255 37.13 34.446L36.576 34.166L36.256 34.002C36.0207 33.8742 35.7873 33.7429 35.556 33.608L35.388 33.514C35.1019 33.3464 34.8191 33.173 34.54 32.994C34.454 32.94 34.37 32.88 34.284 32.824L33.734 32.46C33.3466 32.1915 32.9665 31.9128 32.594 31.624L32.334 31.424C28.334 28.28 25.198 23.984 23.698 19.116C22.126 14.066 22.464 8.396 25.188 3.796M36.652 3.43C34.24 7 34 11.396 35.676 15.32C37.442 19.486 41.062 22.752 45.288 24.32L45.812 24.52L46.044 24.592L46.798 24.792C58.474 27.048 61.638 18.8 62.484 17.586C59.71 21.58 55.048 22.538 49.328 21.15C48.876 21.04 48.38 20.876 47.944 20.722C47.3844 20.5237 46.8357 20.296 46.3 20.04C45.2834 19.5511 44.318 18.9622 43.418 18.282C38.3 14.4 35.12 6.972 38.46 0.94" fill="#0868AC"/></g><defs><clipPath id="clip0_8_17"><rect width="64" height="64" fill="white"/></clipPath></defs></svg>`
    }
  };
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.mobileCenter === void 0 && $$bindings.mobileCenter && mobileCenter !== void 0)
    $$bindings.mobileCenter(mobileCenter);
  $$result.css.add(css$5);
  return `${tags.length > 0 ? `<div class="${"tags-container " + escape(mobileCenter ? "mobile-center" : "", true) + " svelte-1t15so3"}">${each(tags, (tag) => {
    return `${taglist.hasOwnProperty(tag) ? `<code class="${"tag has-icon svelte-1t15so3"}"><!-- HTML_TAG_START -->${taglist[tag].icon}<!-- HTML_TAG_END -->
					<span class="${"svelte-1t15so3"}">${escape(taglist[tag].alias)}</span></code>` : `<code class="${"tag svelte-1t15so3"}"><span>#${escape(tag)}</span></code>`}`;
  })}</div>` : ``}`;
});
const ProfileHeader_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".heading.svelte-a4i0e8.svelte-a4i0e8{margin-bottom:0px}header.svelte-a4i0e8.svelte-a4i0e8{margin:0px;width:100%;display:flex;justify-content:space-around;align-items:flex-start}header.svelte-a4i0e8 .left.svelte-a4i0e8,header.svelte-a4i0e8 .right.svelte-a4i0e8{padding:10px}header.svelte-a4i0e8 .left.svelte-a4i0e8{display:flex;flex-direction:column;justify-content:center}header.svelte-a4i0e8 .left .text-alt.svelte-a4i0e8{padding:0px;margin-top:10px}.right.svelte-a4i0e8 img.svelte-a4i0e8{border-radius:20em;max-width:180px}@media(max-width: 1200px){.right.svelte-a4i0e8 img.svelte-a4i0e8{max-width:80px}}@media(max-width: 600px){header.svelte-a4i0e8.svelte-a4i0e8{margin:0;width:100%;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;flex-direction:column-reverse}header.svelte-a4i0e8 .left h2.svelte-a4i0e8,header.svelte-a4i0e8 .left p.svelte-a4i0e8{text-align:center}}",
  map: null
};
const ProfileHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tags = ["php", "js", "fullstack"];
  let framework = ["ci", "vue", "reactjs", "reactnative", "svelte", "jquery"];
  $$result.css.add(css$4);
  return `<header class="${"svelte-a4i0e8"}"><div class="${"left svelte-a4i0e8"}"><hgroup class="${"heading svelte-a4i0e8"}"><h2 class="${"svelte-a4i0e8"}">Dewantara Tirta Putra</h2>
			<p class="${"svelte-a4i0e8"}">Hello, im passionate web developer based on Yogyakarta.<br>
				<code class="${"text-alt svelte-a4i0e8"}">Currently Working as Backend Engineer @ ICUBE by Sirclo</code></p>
				${validate_component(GenerateTags, "GenerateTags").$$render($$result, { tags, mobileCenter: true }, {}, {})}
				${validate_component(GenerateTags, "GenerateTags").$$render($$result, { tags: framework, mobileCenter: true }, {}, {})}</hgroup></div>
	<div class="${"right svelte-a4i0e8"}"><img src="${"img/pp.webp"}" alt="${""}" class="${"svelte-a4i0e8"}"></div>
</header>`;
});
const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/lib/portfolio/adira-finance.md": () => import("./adira-finance.js"), "/src/lib/portfolio/infest-inkubasi.md": () => import("./infest-inkubasi.js"), "/src/lib/portfolio/sapa-budaya.md": () => import("./sapa-budaya.js") });
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
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
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
    Project = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../portfolio/adira-finance.md": () => import("./adira-finance.js"), "../../portfolio/infest-inkubasi.md": () => import("./infest-inkubasi.js"), "../../portfolio/sapa-budaya.md": () => import("./sapa-budaya.js") }), `../../portfolio/${slugName}.md`).then((res) => {
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
  return `${show && Project != null ? `<dialog open class="${"svelte-oi14fp"}"><article class="${"svelte-oi14fp"}"><header><p></p>
				<span aria-label="${"Close"}" class="${"close svelte-oi14fp"}"></span></header>
			${validate_component(Project || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article></dialog>` : ``}

`;
});
const ShowAll_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-191bcds.svelte-191bcds{margin:1.4em 0px}.container.svelte-191bcds .row.svelte-191bcds{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:1.4em}.project-thumbnail.svelte-191bcds.svelte-191bcds{border-radius:var(--border-radius);box-shadow:var(--card-box-shadow);overflow:hidden;padding:0px;cursor:pointer}.project-thumbnail.svelte-191bcds .card-body.svelte-191bcds{padding:calc(var(--bs-gutter-x) * 0.5)}.project-thumbnail.svelte-191bcds .image.svelte-191bcds{width:100%;height:15vmin;background-position:center;background-repeat:no-repeat;background-size:cover;background-color:var(--secondary)}.project-thumbnail.svelte-191bcds h6.svelte-191bcds{font-size:0.95em;margin-bottom:calc(var(--bs-gutter-x) * 0.5)}.project-thumbnail.svelte-191bcds p.svelte-191bcds{font-size:0.9em}@media(max-width: 767px){.container.svelte-191bcds .row.svelte-191bcds{grid-template-columns:repeat(1, minmax(0, 1fr))}.project-thumbnail.svelte-191bcds .image.svelte-191bcds{height:15vmax}}html[data-theme='light'] .project-thumbnail{background:radial-gradient(circle at top left, hsl(205deg, 20%, 94%) 10%, #fff 90%)}html[data-theme='dark'] .project-thumbnail{background:radial-gradient(circle at top left, #18232c 10%, #141e26 90%)}html[data-theme='dark'] .project-thumbnail:hover{background:radial-gradient(circle at top left, hsl(205deg 29% 22%) 10%, #1f2d38 90%)}",
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

<div class="${"container svelte-191bcds"}">${data.length == 0 ? `Loading...` : `<div class="${"row svelte-191bcds"}">${each(data, (project) => {
      return `<div class="${"project-thumbnail svelte-191bcds"}"><div class="${"image svelte-191bcds"}"${add_attribute("style", `background-image: url(${project.meta.header_image})`, 0)}></div>
					<div class="${"card-body svelte-191bcds"}"><h6 class="${"svelte-191bcds"}">${escape(project.meta.title)}</h6>
						<p class="${"svelte-191bcds"}">${escape(project.meta.description)}</p></div>
				</div>`;
    })}</div>`}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const ProfileBody_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".body.svelte-1i16ooj.svelte-1i16ooj{padding:calc(var(--block-spacing-vertical) * 0.66)\r\n            var(--block-spacing-horizontal);margin:0px 10px}ul.svelte-1i16ooj li.svelte-1i16ooj{color:var(--secondary);border-bottom:4px solid transparent;transition:1s color, 1s border;cursor:pointer;margin-right:10px}ul.svelte-1i16ooj li.svelte-1i16ooj:hover:not(.active){color:var(--secondary-hover);border-bottom:4px solid var(--secondary-hover)}ul.svelte-1i16ooj li.active.svelte-1i16ooj{color:var(--h3-color);border-bottom:4px solid var(--h3-color)}",
  map: null
};
const ProfileBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tab = {
    portfolio: { active: false },
    resume: { active: false },
    contact: { active: false }
  };
  $$result.css.add(css$1);
  return `<div class="${"body svelte-1i16ooj"}"><nav><ul class="${"svelte-1i16ooj"}"><li class="${escape(null_to_empty(tab.portfolio.active ? "active" : ""), true) + " svelte-1i16ooj"}"><strong>Portfolio</strong></li>
            <li class="${escape(null_to_empty(tab.resume.active ? "active" : ""), true) + " svelte-1i16ooj"}"><strong>Resume</strong></li>
            <li class="${escape(null_to_empty(tab.contact.active ? "active" : ""), true) + " svelte-1i16ooj"}"><strong>Contact</strong></li></ul></nav>

    <div>${tab.portfolio.active == true ? `${validate_component(ShowAll, "ShowAll").$$render($$result, {}, {}, {})}` : `${escape(JSON.stringify(tab))}`}</div>
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
  GenerateTags as G,
  Page as P
};
