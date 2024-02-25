//package com.app;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.io.Resource;
//import org.springframework.jdbc.datasource.init.DataSourceInitializer;
//import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;
//
//import javax.sql.DataSource;
//
//@Configuration
//public class DepositMoneyTriggerConfig {
//
//    @Value("classpath:deposit_money_trigger.sql")
//    private Resource triggerScript;
//
//    @Bean
//    public DataSourceInitializer dataSourceInitializer(DataSource dataSource) {
//        ResourceDatabasePopulator populator = new ResourceDatabasePopulator();
//        populator.addScript(triggerScript);
//
//        DataSourceInitializer initializer = new DataSourceInitializer();
//        initializer.setDataSource(dataSource);
//        initializer.setDatabasePopulator(populator);
//
//        return initializer;
//    }
//}
//
//
//
