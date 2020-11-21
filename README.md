# musicutility
Java Music Server to serve both Remote Music Controller and Music Streaming Services

It currently store configuration in file and will try to load this configuration in starting up

High Level Overview
------
- Support management of music files into music lists (can be specified file path through environment variable, it will loop through directories in that path and serve up as selected files) 
- Play music list through streaming on browser
- Control remote music playing and output audio mixers through browser
- Both music play method will loop through music list 

Screenshots
------
Music List Management
![Alt text](/../master/screenshots/music_list_management.png?raw=true "Music List Management")

Play Remote
![Alt text](/../master/screenshots/play_remote.png?raw=true "Play Remote")


Play Streaming
![Alt text](/../master/screenshots/play_streaming.png?raw=true "Play Streaming")


Architecture
![Alt text](/../master/screenshots/architecture.png?raw=true "Architecture")


Backend Technology
------
- Spring Boot
- Java Audio API (SourceDataLine)

Frontend Technology
------
- Angular/Angular Material

IR Technology
------
- JSerial https://fazecast.github.io/jSerialComm/

Compile Setting
------
Following is an example compile
```
# need to install latest npm/angular CLI (detail in controller-web/src/main/web/)
# in git root folder
# note it may need to compile twice in order for the war to package the final javascript
mvn clean package
# collect the final artificat controller.jar from controller-server/target
```

Start Up Setting
------
Following is an example setup
```
export MUSIC_LOCATION='/srv/public/mount/)
# from controller-server/target
java -jar controller.jar
# one can the access at http://localhost:8080/
```

IR Remote Template
------
In the `ir-remote-template`, one can check the sample for IR config and generate one for their own purpose
Replace the `ir_receiver_setting.json` in `MUSIC_LOCATION`, and restart the `musicutility` system to take effect