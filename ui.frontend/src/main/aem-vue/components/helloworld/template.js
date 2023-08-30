export default {
    template: `<div class="cmp-helloworld__item">
                    <p class="cmp-helloworld__item-label">Model message:</p>
                    <pre class="cmp-helloworld__item-output" data-cmp-hook-helloworld="model">Resource Path: {{ modelData.resourceType }}</pre>
                    <pre class="cmp-helloworld__item-output" data-cmp-hook-helloworld="model">Current Page Path: {{ modelData.currentPagePath }}</pre>
                    <div>State Counter {{countNow}}</div>
                </div>`,
    props: ['modelData']
};
