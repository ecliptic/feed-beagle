FROM node:boron

ENV PORT=4000 \
    NODE_ENV=production

COPY build/Main.js /srv/feed-beagle/Main.js

WORKDIR /srv/feed-beagle

CMD ["node", "Main.js"]

EXPOSE $PORT
