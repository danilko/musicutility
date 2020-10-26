package com.musicutility.component;

import com.musicutility.persistence.repo.MusicPlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Date;

@Component
public class MusicPlayerThreadPoolTaskScheduler {
    @Autowired
    private ThreadPoolTaskScheduler threadPoolTaskSchedulerMusicPlayer;

    @Autowired
    private MusicPlayerRepository musicPlayerRepository;

    @PostConstruct
    public void scheduleRunnableWithCronTrigger() {
        threadPoolTaskSchedulerMusicPlayer.schedule(new MusicPlayerComponent(musicPlayerRepository), new Date());
    }

    @Bean
    public ThreadPoolTaskScheduler threadPoolTaskSchedulerMusicPlayer() {
        ThreadPoolTaskScheduler threadPoolTaskScheduler = new ThreadPoolTaskScheduler();
        threadPoolTaskScheduler.setPoolSize(1);
        threadPoolTaskScheduler.setThreadNamePrefix("ThreadPoolTaskSchedulerMusicPlayer");
        return threadPoolTaskScheduler;
    }

}
