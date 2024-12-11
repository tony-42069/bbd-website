# Website Migration Plan: GoDaddy to Vercel

## Current Infrastructure
- Domain: bakedbydonika.com
- Registrar: GoDaddy
- Hosting: GoDaddy
- DNS: GoDaddy

## Migration Steps

### 1. Vercel Setup
- [ ] Create Vercel account
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Set up environment variables

### 2. DNS Configuration
- [ ] Document current DNS records
- [ ] Add Vercel DNS records to GoDaddy
- [ ] Configure custom domain in Vercel
- [ ] Set up SSL/TLS certificates

### 3. Testing
- [ ] Test website on Vercel deployment URL
- [ ] Verify all functionality
- [ ] Check forms and integrations
- [ ] Test email functionality

### 4. Cutover
- [ ] Schedule maintenance window
- [ ] Update DNS records
- [ ] Verify DNS propagation
- [ ] Monitor site availability

## Rollback Plan
- Keep GoDaddy hosting active during transition
- Document all DNS changes
- Maintain backup of website files

## DNS Records to Update
```
# Example Records (to be filled with actual values)
Type    Name    Value               TTL
A       @       76.76.21.21         Auto
CNAME   www     cname.vercel.app    Auto
```

## Important Contacts
- GoDaddy Support
- Vercel Support
- Domain Administrator