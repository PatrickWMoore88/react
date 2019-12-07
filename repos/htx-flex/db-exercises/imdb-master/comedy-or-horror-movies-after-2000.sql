select * from title_basics where  title_type = 'movie' and start_year > 2000 and
(genres = 'Comedy' or genres = 'Horror');