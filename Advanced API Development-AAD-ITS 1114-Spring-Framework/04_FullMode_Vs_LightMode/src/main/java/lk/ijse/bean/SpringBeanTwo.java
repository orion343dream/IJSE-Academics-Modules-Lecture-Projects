package lk.ijse.bean;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

public class SpringBeanTwo implements BeanNameAware, ApplicationContextAware {
    public SpringBeanTwo() {
    }

    @Override
    public void setBeanName(String name) {
        System.out.println(name);
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        System.out.println("SpringBeanTwo setApplicationContext");
    }
}
