FROM ruby:3.3-alpine

RUN apk update && apk upgrade && apk add --update bash build-base libxml2-dev libxslt-dev npm yarn tzdata shared-mime-info git
WORKDIR /app
COPY hellorails/* .

RUN bundle install --jobs 10

CMD ["rails", "server", "-b", "0.0.0.0"]
