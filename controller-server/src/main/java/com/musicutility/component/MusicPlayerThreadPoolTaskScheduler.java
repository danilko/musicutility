package com.musicutility.component;

import com.musicutility.persistence.repo.MusicPlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Date;
import java.util.logging.Logger;

@Component
public class MusicPlayerThreadPoolTaskScheduler {
    @Autowired
    private ThreadPoolTaskScheduler threadPoolTaskScheduler;

    @Autowired
    private MusicPlayerRepository musicPlayerRepository;

    @PostConstruct
    public void scheduleRunnableWithCronTrigger() {
        System.out.println("trigger schedule");
        threadPoolTaskScheduler.schedule(new MusicPlayerComponent(musicPlayerRepository), new Date());
    }

    @Bean
    public ThreadPoolTaskScheduler threadPoolTaskScheduler() {
        ThreadPoolTaskScheduler threadPoolTaskScheduler = new ThreadPoolTaskScheduler();
        threadPoolTaskScheduler.setPoolSize(1);
        threadPoolTaskScheduler.setThreadNamePrefix("ThreadPoolTaskScheduler");
        return threadPoolTaskScheduler;
    }

}
