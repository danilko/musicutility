package com.musicutility.component;

import com.musicutility.persistence.repo.IRReceiverSettingRepository;
import com.musicutility.web.MusicPlayerController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Date;

@Component
public class IRReceiverThreadPoolTaskScheduler {
    @Autowired
    private ThreadPoolTaskScheduler threadPoolTaskSchedulerIRReceiverRemote;

    @Autowired
    private IRReceiverSettingRepository iRReceiverSettingRepository;

    @Autowired
    private MusicPlayerController musicPlayerController;

    @PostConstruct
    public void scheduleRunnableWithCronTrigger() {
        threadPoolTaskSchedulerIRReceiverRemote.schedule(
                new IRReceiverComponent(iRReceiverSettingRepository, musicPlayerController), new Date());
    }

    @Bean
    public ThreadPoolTaskScheduler threadPoolTaskSchedulerIRReceiverRemote() {
        ThreadPoolTaskScheduler threadPoolTaskScheduler = new ThreadPoolTaskScheduler();
        threadPoolTaskScheduler.setPoolSize(1);
        threadPoolTaskScheduler.setThreadNamePrefix("ThreadPoolTaskSchedulerIRReceiverRemote");
        return threadPoolTaskScheduler;
    }


}
