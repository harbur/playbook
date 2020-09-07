{
    "apiVersion": "tekton.dev/v1alpha1",
    "kind": "PipelineResource",
    "metadata": {
        "name": "git-example2",
        "namespace": "tektoncd"
    },
    "spec": {
        "params": [
            {
                "name": "url",
                "value": "https://github.com/harbur/playbook"
            },
            {
                "name": "revision",
                "value": "master"
            }
        ],
        "type": "git"
    }
}
