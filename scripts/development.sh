if [ "`git status -s`" ]
then
  echo "This is a reminder that you have unstaged commits."

  echo "Start developing"
  gulp development

fi
