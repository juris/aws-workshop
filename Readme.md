# Devternity AWS Workshop Helper

AWS URL: <https://devternity.signin.aws.amazon.com/console>

CoreOS AMI ID: `ami-4d795c5a`

How to launch simple Thumbor service:
```
$ docker run -p 80:8000 apsl/thumbor
```

Test URLs:
- unsafe/600x600/c7.nrostatic.com/sites/default/files/uploaded/donald-trump-bankruptcy-lies-r.jpg
- unsafe/600x600/filters:contrast(60)/c7.nrostatic.com/sites/default/files/uploaded/donald-trump-bankruptcy-lies-r.jpg
- unsafe/600x600/filters:contrast(60):quality(1)/c7.nrostatic.com/sites/default/files/uploaded/donald-trump-bankruptcy-lies-r.jpg
- unsafe/900x900/weknowmemes.com/generator/uploads/generated/g1383217633761643609.jpg
- unsafe/800x600/sethvargo.com/the-ten-myths-of-devops/worked-in-dev-ops-problem-now-7809f3cf.jpg
- unsafe/800x800/images.musictimes.com/data/images/full/15569/sasha-grey.jpg
- unsafe/800x800/filters:quality(20):equalize()/images.musictimes.com/data/images/full/15569/sasha-grey.jpg

App ELB health check path: `/healthcheck`

Load test host: `ab.aws.zee.lv`
Load test ELB:
```
$ ab -n 100000 -c 10 <URL>
```
