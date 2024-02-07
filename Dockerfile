FROM cypress/browsers:node18.12.0-chrome107

RUN mkdir /cypress-mxp-legacy

WORKDIR /cypress-mxp-legacy

COPY ./package.json .

COPY ./cypress.config.js .

COPY ./cypress ./cypress

RUN npm install

ENTRYPOINT [ "npx", "cypress","run"]

## desde la siguiente linea podremos especificar el browser o el spec, 
## sino se le envia nada queda esperando cuando se ejecute la imagen
CMD [ "" ]