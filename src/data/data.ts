import { MessageAnalysis, MessageAnalysisType } from './types';

const data: MessageAnalysis[] = [
  {
    search: ['help nooktheme', 'nooktheme not work', 'nooktheme error'],
    type: MessageAnalysisType.Contains,
    reply: `
  \`\`\`sh
  cd /var/www/pterodactyl

  php artisan down

  curl -L https://github.com/Nookure/NookTheme/releases/latest/download/panel.tar.gz | tar -xzv

  chmod -R 755 storage/* bootstrap/cache

  composer install --no-dev --optimize-autoloader

  php artisan view:clear
  php artisan config:clear

  php artisan migrate --seed --force

  chown -R www-data:www-data /var/www/pterodactyl/* # NGINX/APACHE (Not CentOS, check GitHub for CentOS cmds)

  php artisan queue:restart

  php artisan up
  \`\`\`
  `,
  },
  {
    search: ['_hash', 'ERR_OSSL', 'Object.createHash'],
    type: MessageAnalysisType.Contains,
    reply: 'Run the command `NODE_OPTIONS=--openssl-legacy-provider yarn build:production` and then reload the page.',
  },
];

export default data;
