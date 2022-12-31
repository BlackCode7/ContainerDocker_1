FROM openjdk

WORKDIR /app

COPY target/env_java_angular_backend-0.0.1-SNAPSHOT.war /app/env_java_angular_backend.war

ENTRYPOINT ["java", "-war", "env_java_angular_backend.war"]