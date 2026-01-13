
export const socialProviders = [
  { code: "apple", name: "Apple", hsl: "hsl(0, 0%, 0%)", icon: "fa-apple" },
  { code: "bitbucket", name: "Bitbucket", hsl: "hsl(210, 60%, 31%)", icon: "fa-bitbucket" },
  { code: "discord", name: "Discord", hsl: "hsl(226.7, 58.4%, 65.1%)", icon: "fa-discord" },
  { code: "dropbox", name: "Dropbox", hsl: "hsl(217.2, 100%, 50%)", icon: "fa-dropbox" },
  { code: "facebook", name: "Facebook", hsl: "hsl(213.9, 89.3%, 52.2%)", icon: "fa-facebook" },
  { code: "flickr", name: "Flickr", hsl: "hsl(329, 100%, 50%)", icon: "fa-flickr" },
  { code: "foursquare", name: "Foursquare", hsl: "hsl(344.1, 93.7%, 62.9%)", icon: "fa-foursquare" },
  { code: "github", name: "GitHub", hsl: "hsl(210, 12.2%, 16.1%)", icon: "fa-github" },
  { code: "gitlab", name: "GitLab", hsl: "hsl(13.6, 79.2%, 52.9%)", icon: "fa-gitlab" },
  { code: "instagram", name: "Instagram", hsl: "hsl(353.8, 82.1%, 62.7%)", icon: "fa-instagram" },
  { code: "linkedin", name: "LinkedIn", hsl: "hsl(210, 90.2%, 40%)", icon: "fa-linkedin" },
  { code: "microsoft", name: "Microsoft", hsl: "hsl(206.4, 100%, 36.1%)", icon: "fa-microsoft" },
  { code: "odnoklassniki", name: "Odnoklassniki", hsl: "hsl(31, 93%, 48%)", icon: "fa-odnoklassniki" },
  { code: "openid", name: "OpenID", hsl: "hsl(25, 85%, 55%)", icon: "fa-openid" },
  { code: "pinterest", name: "Pinterest", hsl: "hsl(350.9, 100%, 45.1%)", icon: "fa-pinterest" },
  { code: "reddit", name: "Reddit", hsl: "hsl(16.2, 100%, 50%)", icon: "fa-reddit" },
  { code: "slack", name: "Slack", hsl: "hsl(294, 54%, 27%)", icon: "fa-slack" },
  { code: "soundcloud", name: "SoundCloud", hsl: "hsl(20, 100%, 50%)", icon: "fa-soundcloud" },
  { code: "tumblr", name: "Tumblr", hsl: "hsl(209.5, 36.2%, 32%)", icon: "fa-tumblr" },
  { code: "twitter", name: "Twitter", hsl: "hsl(202.8, 89.1%, 53.1%)", icon: "fa-twitter" },
  { code: "vimeo", name: "Vimeo", hsl: "hsl(196.6, 100%, 46.9%)", icon: "fa-vimeo" },
  { code: "vk", name: "VK", hsl: "hsl(212, 42%, 52%)", icon: "fa-vk" },
  { code: "yahoo", name: "Yahoo", hsl: "hsl(266.7, 100%, 28.2%)", icon: "fa-yahoo" },
  { code: "youtube", name: "YouTube", hsl: "hsl(360, 100%, 50%)", icon: "fa-youtube" },
];

export function getProviderByCode(code) {
  return socialProviders.find(p => p.code === code);
}

export function getProvidersMap() {
  return Object.fromEntries(
    socialProviders.map(p => [p.code, { icon: p.icon, name: p.name }])
  );
}
