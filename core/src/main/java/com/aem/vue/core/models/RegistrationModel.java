package com.aem.vue.core.models;

import com.adobe.cq.export.json.ExporterConstants;
import com.drew.lang.annotations.NotNull;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {RegistrationModel.class}, resourceType = RegistrationModel.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION, selector = ExporterConstants.SLING_MODEL_SELECTOR)
public class RegistrationModel {
    public static final String RESOURCE_TYPE = "aem-vue/components/registration";

    @Getter
    @ValueMapValue
    protected String titleLabel;
    @Getter
    List<TitleItem> titleItems;
    @Getter
    @ValueMapValue
    protected String firstNameLabel;
    @Getter
    @ValueMapValue
    protected boolean isFNameRequired;
    @Getter
    @ValueMapValue
    protected String firstNameErrorMessage;
    @Getter
    @ValueMapValue
    protected String lastNameLabel;
    @Getter
    @ValueMapValue
    protected boolean isLNameRequired;
    @Getter
    @ValueMapValue
    protected String lastNameErrorMessage;
    @Getter
    @ValueMapValue
    protected String emailLabel;
    @Getter
    @ValueMapValue
    protected String emailErrorMessage;
    @Getter
    @ValueMapValue
    protected String passwordLabel;
    @Getter
    @ValueMapValue
    protected int passwordMinLength;
    @Getter
    @ValueMapValue
    protected String passwordErrorMessage;
    @Getter
    @ValueMapValue
    protected String confirmPasswordLabel;
    @Getter
    @ValueMapValue
    protected int cPasswordMinLength;
    @Getter
    @ValueMapValue
    protected String confirmPasswordErrorMessage;
    @Getter
    @ValueMapValue
    protected String submitLabel;
    @Getter
    @JsonIgnore
    private String jsonData;

    @Self @JsonIgnore
    private SlingHttpServletRequest servletRequest;
    @JsonIgnore
    private Resource componentResource;

    @PostConstruct
    protected void init() throws JsonProcessingException {
        this.componentResource = servletRequest.getResource();
        createTitleItems();
        ObjectMapper objectMapper = new ObjectMapper();
        jsonData = objectMapper.writeValueAsString(this);
    }

    private void createTitleItems() {
        this.titleItems = Optional.ofNullable(this.componentResource.getChild("titleItem"))
                .map(Resource::getChildren)
                .map(Iterable::spliterator)
                .map(s -> StreamSupport.stream(s, false))
                .orElseGet(Stream::empty)
                .map(TitleItem::new)
                .collect(Collectors.toList());
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class TitleItem {
        private String name;
        private String value;

        public TitleItem(@NotNull final Resource actionRes) {
            ValueMap ctaProperties = actionRes.getValueMap();
            name = ctaProperties.get("title", StringUtils.EMPTY);
            value = ctaProperties.get("value", StringUtils.EMPTY);
        }
    }
}
