//package com.app.service;
//
//import org.springframework.cache.Cache;
//import java.util.concurrent.Callable;
//import java.util.concurrent.ConcurrentHashMap;
//import java.util.concurrent.ConcurrentMap;
//import org.springframework.scheduling.annotation.Scheduled;
//
//public class CustomExpiringCache implements Cache {
//
//    private final String name;
//    private final ConcurrentMap<Object, ExpiringObject> store = new ConcurrentHashMap<>();
//
//    public CustomExpiringCache(String name) {
//        this.name = name;
//    }
//
//    @Override
//    public String getName() {
//        return name;
//    }
//
//    @Override
//    public Object getNativeCache() {
//        return store;
//    }
//    
//
//
//        @Scheduled(fixedDelay = 60000) // Run every minute
//        public void evictExpiredEntries() {
//            store.entrySet().removeIf(entry -> entry.getValue().isExpired());
//        }
//
//
//
//    @Override
//    public ValueWrapper get(Object key) {
//        ExpiringObject value = store.get(key);
//        if (value != null && !value.isExpired()) {
//            return value;
//        } else {
//            evict(key); // Remove expired entry
//            return null;
//        }
//    }
//
//    @Override
//    public <T> T get(Object key, Class<T> type) {
//        ValueWrapper wrapper = get(key);
//        return (wrapper != null ? (T) wrapper.get() : null);
//    }
//
//    @Override
//    public <T> T get(Object key, Callable<T> valueLoader) {
//        ValueWrapper wrapper = get(key);
//        if (wrapper != null) {
//            return (T) wrapper.get();
//        } else {
//            try {
//                T value = valueLoader.call();
//                put(key, value);
//                return value;
//            } catch (Exception ex) {
//                throw new RuntimeException(ex);
//            }
//        }
//    }
//
//    @Override
//    public void put(Object key, Object value) {
//        store.put(key, new ExpiringObject(value));
//    }
//
//    @Override
//    public void evict(Object key) {
//        store.remove(key);
//    }
//
//    @Override
//    public void clear() {
//        store.clear();
//    }
//
//    // Helper class for storing value with expiration time
//    private static class ExpiringObject implements ValueWrapper {
//        private final Object value;
//        private final long expirationTime;
//
//        public ExpiringObject(Object value) {
//            this.value = value;
//            this.expirationTime = System.currentTimeMillis() + (1 * 60 * 1000); // 1 minute in milliseconds
//        }
//
//        public boolean isExpired() {
//            return System.currentTimeMillis() >= expirationTime;
//        }
//
//        @Override
//        public Object get() {
//            return value;
//        }
//    }
//}
