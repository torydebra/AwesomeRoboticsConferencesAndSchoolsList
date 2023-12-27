export COMMIT_HASH=$(git rev-parse --short HEAD)

pattern='(<span id="version_tag"><a href="https://github.com/torydebra/AwesomeRoboticsConferencesAndSchoolsList/commit/)([0-9a-zA-Z]*)(" class="text-dark">v[0-9]+\.[0-9]+\.)([0-9a-zA-Z]*)(</a></span>)'

sed -i -E "s|$pattern|\1$COMMIT_HASH\3$COMMIT_HASH\5|g" index.html

