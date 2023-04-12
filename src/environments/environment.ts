const apiConfig = {
  clientId: '8ez2fd2pkscqb82wuel9kgefdufd3n',
  authUrl: 'https://id.twitch.tv/oauth2/authorize',
  redirectUrl: 'https://angular-twitch-application.netlify.app/auth/authorize',
  baseUrl: 'https://api.twitch.tv/helix',
};

const oAuthConfig = {
  authLink: `${apiConfig.authUrl}?client_id=${apiConfig.clientId}&response_type=token&redirect_uri=${apiConfig.redirectUrl}`
};

export const environment = {
  production: true,
  api: {...apiConfig, ...oAuthConfig},
  twitch: {
    streamPlayerUrl: 'https://player.twitch.tv/?parent=valarep-2023.netlify.app&channel=',
    clipPlayerUrl: 'https://clips.twitch.tv/embed?parent=valarep-2023.netlify.app&clip=',
    videoPlayerUrl: 'https://videos.twitch.tv/embed?parent=valarep-2023.netlify.app&video=',
    chatUrl: 'https://www.twitch.tv/embed/[USERNAME]/chat?parent=valarep-2023.netlify.app',
  }
};
