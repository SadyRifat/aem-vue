package com.aem.vue.core.models;

import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.PostConstruct;

@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {LoginModel.class},
        resourceType = LoginModel.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION, selector = ExporterConstants.SLING_MODEL_SELECTOR)
public class LoginModel {
    public static final String RESOURCE_TYPE = "aem-vue/components/login";

    @ValueMapValue
    protected String email;
    @ValueMapValue
    protected String password;
    @ValueMapValue
    protected String submit;
    @JsonIgnore
    private String jsonData;

    @PostConstruct
    protected void init() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        jsonData = objectMapper.writeValueAsString(this);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSubmit() {
        return submit;
    }

    public void setSubmit(String submit) {
        this.submit = submit;
    }

    public String getJsonData() {
        return jsonData;
    }
}
