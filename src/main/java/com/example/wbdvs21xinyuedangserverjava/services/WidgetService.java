package com.example.wbdvs21xinyuedangserverjava.services;


import com.example.wbdvs21xinyuedangserverjava.models.Widget;
import com.example.wbdvs21xinyuedangserverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WidgetService {

    @Autowired
    WidgetRepository repository;

    public Widget createWidgetForTopic(Widget widget) {
        return repository.save(widget);
    }

    public List<Widget> findAllWidgets() {
        return repository.findAllWidgets();
    }

    public List<Widget> findWidgetsForTopic(String topicId) {
        return repository.findWidgetsForTopic(topicId);
    }

    public Widget findWidgetById(Long id) {
        return repository.findWidgetById(id);
    }

    public Integer deleteWidget(Long id) {
        repository.deleteById(id);
        return 1;
    }

    public Integer updateWidget(Long id, Widget newWidget) {
        Widget originalWidget = findWidgetById(id);

        originalWidget.setType(newWidget.getType());
        originalWidget.setSize(newWidget.getSize());
        originalWidget.setText(newWidget.getText());
        originalWidget.setSrc(newWidget.getSrc());
        originalWidget.setWidth(newWidget.getWidth());
        originalWidget.setHeight(newWidget.getHeight());

        repository.save(originalWidget);
        return 1;
    }
}
