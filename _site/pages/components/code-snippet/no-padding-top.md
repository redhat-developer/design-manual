## No Padding (Top)
<pre class="highlight language-bash assembly assembly-type-code_snippet pf-u-pt-0">
  <code>
    oc new-project knativetutorial
    oc adm policy add-scc-to-user privileged -z default
    oc adm policy add-scc-to-user anyuid -z default
  </code>
</pre>
