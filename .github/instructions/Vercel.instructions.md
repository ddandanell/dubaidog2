# Deployment Skill: Vercel + GitHub + Domain

Before saying the deployment is finished, you must verify:

1. Git status is clean or explain what files are uncommitted.
2. The project builds locally.
3. The correct environment variables exist.
4. The project is connected to the correct GitHub repo.
5. The latest commit is pushed.
6. Vercel has a successful deployment.
7. The production URL opens.
8. The custom domain is assigned to the correct Vercel project.
9. DNS records are correct.
10. HTTPS works.
11. The homepage returns HTTP 200.
12. Mobile and desktop screenshots are checked.

Commands to use:

- git status
- npm install
- npm run build
- vercel
- vercel --prod
- dig domain.com
- dig www.domain.com
- curl -I https://domain.com

If anything fails, explain exactly:
- what failed
- why it likely failed
- which file, setting, DNS record, or environment variable needs fixing
- the next command to run