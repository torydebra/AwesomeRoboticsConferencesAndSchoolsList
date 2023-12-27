export COMMIT_HASH=$(git rev-parse --short HEAD)
for s in "conf2022.json"; do 
    echo $s
    echo $(basename $s)
    sed -i "s/$(basename $s)?v=cacheBusting[^\"]*/$(basename $s)?v=cacheBusting$COMMIT_HASH/g" index.html conf.html school.html;
done
