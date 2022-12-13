FROM public.ecr.aws/bitnami/node:16 as webBuild
WORKDIR /tmp
COPY ./web ./web
WORKDIR /tmp/web
RUN yarn install
RUN yarn build:docker

FROM public.ecr.aws/bitnami/gradle:7 as serverBuild
WORKDIR /tmp
COPY ./server ./server
WORKDIR /tmp/server
COPY --from=webBuild /tmp/web/build /tmp/server/src/main/resources/public
RUN ./gradlew build -x test

FROM public.ecr.aws/docker/library/openjdk:17-jdk
COPY --from=serverBuild /tmp/server/build/libs/postfacto-0.0.1-SNAPSHOT.jar ./app.jar
EXPOSE 8080
CMD ["sh", "-c", "java -jar -Dspring.profiles.active=acceptance app.jar"]

