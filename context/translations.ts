export type Locale = 'en' | 'vi';

export const translations = {
    en: {
        nav: {
            home: 'Home',
            services: 'Services',
            work: 'Work',
            process: 'Process',
            about: 'About',
            startProject: 'Start a Project',
        },
        footer: {
            tagline: 'Design Systems. Deployment. Long-term Support.',
            builtForTime: 'Built to last.',
            navigate: 'Navigate',
            getInTouch: 'Get in Touch',
            allRightsReserved: 'All rights reserved.',
            taglineBottom: 'Systems, not pages.',
        },
        cta: {
            title: "Build Software That Holds Up Over Time",
            subtitle: "If you're ready to invest in structure rather than shortcuts, let's talk about your project.",
            button: 'Start a Conversation',
        },
        hero: {
            badge: "Professional Software Development & System Operations Studio",
            headlineWords: ['Design,', 'build,', 'and', 'operate'],
            headlineGradient: 'software systems built to last.',
            subtitle: 'End-to-end delivery from architecture to production: web development, workflow automation, and AI integration for businesses that need systems that scale.',
            button: 'Start a Project',
        },
        services: {
            title: "Software Development",
            titleGradient: "Services",
            subtitle: "We design, build, and maintain the full stack — and stay involved after handoff so the system keeps running the way it should.",
            items: {
                ux: {
                    title: "Web Design & UX",
                    description: "Figma UI design, wireframes, interactive prototypes, and cross-device UX systems built to improve user experience and support long-term product growth."
                },
                building: {
                    title: "Web Development & Architecture",
                    description: "Custom web applications, enterprise portals, normalized database systems, and API architecture designed for performance and long-term maintainability."
                },
                hosting: {
                    title: "Hosting & CI/CD",
                    description: "Cloud infrastructure setup, automated CI/CD pipelines, SSL security hardening, scheduled data backups, and 24/7 system monitoring."
                },
                maintenance: {
                    title: "Maintenance & Scaling",
                    description: "Scheduled maintenance, security patching, Core Web Vitals performance tuning, and ongoing technical support to keep your site stable under real load."
                },
                automation: {
                    title: "AI Agents & Automation",
                    description: "LLM integration, intelligent AI chatbot development, and operational workflow automation that reduce manual overhead and lower cost per process."
                },
                analytics: {
                    title: "Data Analytics & Reporting",
                    description: "Visual dashboards, conversion funnel analysis, and detailed measurement reporting to track KPIs and support data-driven business decisions."
                }
            }
        },
        process: {
            title: "How We",
            titleGradient: "Work",
            steps: {
                step1: {
                    title: "Audit & Scope",
                    description: "We audit the product, existing workflows, and technical constraints first. Scope, risk surface, and delivery priorities are defined before any build work starts."
                },
                step2: {
                    title: "System Design",
                    description: "UX direction, database schema, API contracts, and automation flows are all mapped before implementation scales. Nothing is built without a clear technical plan."
                },
                step3: {
                    title: "Build & Integrate",
                    description: "Web applications, internal tools, third-party integrations, and deployment pipelines are delivered as one connected, tested stack."
                },
                step4: {
                    title: "Support & Iterate",
                    description: "After launch, we stay involved: maintenance cycles, uptime monitoring, performance reviews, security patching, and feature iteration as the product grows."
                }
            },
            support: {
                badge: "ONGOING SUPPORT",
                title: "Launch once.",
                titleGradient: "Improve continuously.",
                description: "We remain involved long after release: maintenance windows, infrastructure monitoring, backup schedules, safe deployment workflows, content updates, and regular performance reviews.",
                monitoring: "Monitoring",
                saferDeploys: "Safer Deploys",
                button: "Discuss Support"
            }
        },
        philosophy: {
            title: "Built for",
            titleGradient: "Longevity",
            p1: "Most software projects are scoped around launch. We scope around what happens after. Every system we deliver is designed to absorb change without structural collapse — adaptable as the business grows, not brittle when requirements shift.",
            p2: "A website is not a brochure. It's operational infrastructure. Every design decision is an architectural one: each component and coding convention must hold up through updates, scale with content volume, and remain stable across maintenance cycles.",
            p3: "We don't optimize for novelty. We build systems that stay coherent over years, not sprints. The goal is durability — software that earns its keep long after the initial handoff."
        },
        about: {
            badge: "The Team",
            title: "Driven by",
            titleGradient: "Deep Expertise",
            subtitle: "A remote-first team of engineers, system architects, and product designers with a shared focus on building software that performs under real conditions.",
            engineTitle: "How We Operate",
            engineSubtitle: "Three core disciplines working in tight coordination",
            cylinders: {
                ux: {
                    title: "Strategy",
                    description: "Decisions grounded in data. We assess market opportunities and design solutions where business objectives and technical constraints are both accounted for."
                },
                building: {
                    title: "Systems",
                    description: "Infrastructure as code. We build reliable, scalable systems using modern DevOps workflows and cloud-native architectures designed for long-term operational stability."
                },
                hosting: {
                    title: "Product",
                    description: "Standardized design systems. We build user experiences that are clear, accessible, and consistent across every platform and screen size."
                }
            },
            valuesTitle: "Our Values",
            valuesSubtitle: "The principles that shape how we work and what we deliver",
            values: {
                transparency: {
                    title: "Transparency",
                    description: "Direct, clear communication at every project stage"
                },
                quality: {
                    title: "Quality",
                    description: "Clean, tested, and maintainable code from day one"
                },
                ownership: {
                    title: "Ownership",
                    description: "We treat your product's outcome as our own responsibility"
                },
                innovation: {
                    title: "Modern Practice",
                    description: "Current tooling, proven architectural patterns, no legacy debt"
                }
            },
            joinTitle: "Work With Us",
            joinSubtitle: "Ready to work with a team that treats your product with the same care you do?",
            joinButton: "Start a Conversation"
        },
        contact: {
            title: "Contact",
            subtitle1: "Have a project in scope? Or just want to explore options?",
            subtitle2: "Send us a message and we'll take it from there.",
            emailHeader: "Email",
            expectHeader: "What Happens Next",
            expect1: "We respond within 24 to 48 business hours.",
            expect2: "If there's a good fit, we'll schedule a short discovery call.",
            expect3: "From there, we'll map out next steps together.",
            messageSent: "Message sent",
            sentSuccess: "We'll follow up within 2 business days.",
            form: {
                name: "Full Name",
                namePlaceholder: "Your name",
                email: "Email",
                emailPlaceholder: "you@company.com",
                company: "Company",
                companyOptional: "(optional)",
                companyPlaceholder: "Your company name",
                service: "Service of Interest",
                serviceSelect: "Select a service...",
                budget: "Budget Range",
                budgetOptional: "(optional)",
                budgetSelect: "Select a range...",
                message: "Message",
                messagePlaceholder: "Describe your project or question...",
                submit: "Send Message",
                sending: "Sending..."
            },
            services: {
                ux: 'Web Design & UX Systems',
                building: 'Web Development & System Architecture',
                hosting: 'Hosting, DevOps & Infrastructure',
                maintenance: 'Maintenance & Performance',
                automation: 'AI Agents & Workflow Automation',
                analytics: 'Data Analytics & Reporting',
                cms: 'Content Operations & CMS Support',
                other: 'Other'
            },
            budgetOptions: {
                under_1k: 'Under $1,000',
                _1k_5k: '$1,000 – $5,000',
                _5k_10k: '$5,000 – $10,000',
                _10k_plus: '$10,000+',
                tbd: 'Not determined yet'
            }
        },
        processPage: {
            badge: "How We Deliver",
            title: "Engineering",
            titleGradient: "Discipline",
            subtitle: "Every build is structured around code architecture, security boundaries, containerized deployment, and post-launch performance measurement.",
            deliverablesHeader: "Deliverables",
            phase: "Phase",
            ctaTitle: "Ready to Build With Discipline?",
            ctaSubtitle: "Let's talk through how we'd architect your product — with concrete deliverables defined at every phase.",
            ctaButton: "Start a Conversation",
            phases: {
                phase1: {
                    title: "Architecture & Definition",
                    description: "We establish the technical foundation: clear API contracts, scalable data models, and full stack validation before any code is written.",
                    deliverables: [
                        "Technical requirements document",
                        "API specification (OpenAPI 3.0)",
                        "Database schema design",
                        "Infrastructure architecture diagram",
                        "Technology stack validation"
                    ]
                },
                phase2: {
                    title: "Development & Testing",
                    description: "Modular, component-driven development with typed APIs, strict Git workflows, and PR review at every stage.",
                    deliverables: [
                        "Feature branches with PR reviews",
                        "Component library documentation",
                        "API implementation with test coverage",
                        "Automated integration test suite",
                        "Weekly staging deployments"
                    ]
                },
                phase3: {
                    title: "DevOps & Operations",
                    description: "Automated CI/CD pipelines, containerized deployment, and real-time monitoring configured before production goes live.",
                    deliverables: [
                        "CI/CD pipeline configuration",
                        "Docker containerization",
                        "Kubernetes manifests",
                        "Monitoring & alerting setup",
                        "Performance and traffic optimization"
                    ]
                }
            }
        },
        servicesPage: {
            badge: "CAPABILITIES",
            title: "Full-Stack",
            titleGradient: "Software Engineering",
            subtitle: "From UI design and system architecture to cloud infrastructure and long-term maintenance — every layer of the stack, handled as a single delivery.",
            button: "View Details",
            discussSupport: "Discuss Support",
            heroTitlePrefix: "End-to-End",
            heroTitleGradient: "Software Delivery",
            heroSubtitle: "We don't just write code. We design the architecture, build the interfaces, configure deployment, and own long-term scalability as the product grows.",
            heroButton: "Explore Our Process",
            heroLink: "Book a Strategy Call",
            ctaTitlePrefix: "Ready to build",
            ctaTitleGradient: "something that scales",
            ctaButton: "Book a Consultation",
            systemsSupported: "Systems We Currently Support",
            items: {
                ux: {
                    title: "Web Design & UX Systems",
                    slogan: "Interfaces designed for clarity, conversion, and real user workflows.",
                    description: "We design in Figma before writing a line of code. That covers UX research, user flow mapping, wireframes, interactive prototypes, brand systems, and reusable component libraries. The goal is not aesthetics alone. It's to create interfaces your team can extend over time without the design breaking apart."
                },
                building: {
                    title: "Web Development & System Architecture",
                    slogan: "From marketing sites to portals, dashboards, and custom internal tools.",
                    description: "We build custom websites and software systems with a clear technical structure behind them: API contracts, database schema planning, infrastructure diagrams, CMS selection, and delivery roadmaps. Web development, data modeling, build tooling, and workflow design are handled as one unified delivery."
                },
                hosting: {
                    title: "Hosting, DevOps & Cloud Infrastructure",
                    slogan: "Automated deployment pipelines and cloud foundations that stay stable at scale.",
                    description: "We configure hosting the way engineering teams actually need it: VPS or cloud-managed, Dockerized deployments, CI/CD pipelines, reverse proxy, SSL, automated backup schedules, monitoring, and rollback planning. Whether the stack runs on AWS, GCP, Azure, or a lean VPS, we shape it for predictable, repeatable releases."
                },
                maintenance: {
                    title: "Maintenance, Performance & Scalability",
                    slogan: "Long-term technical support for software that keeps evolving after launch.",
                    description: "Maintenance is not just bug fixes. We cover performance tuning, Core Web Vitals optimization, observability setup, security hardening, uptime checks, dependency patching, and capacity reviews as the stack grows. We also handle technical SEO and structured data when organic search performance is a product requirement."
                },
                automation: {
                    title: "AI Agents & Workflow Automation",
                    slogan: "Automate repetitive operations without disrupting the existing stack.",
                    description: "We integrate AI where it adds real value: customer support bots, automated reporting pipelines, proposal generation, smart dashboards, custom LLM workflows, and internal assistants connected to your live data. That includes Zapier, Make, and custom API automation flows that eliminate manual, repeated operations from the team."
                },
                analytics: {
                    title: "Data Analytics & Reporting",
                    slogan: "Dashboards and operational insights your team can act on.",
                    description: "We help teams convert raw operational and product data into decision-ready reporting: KPI dashboards, conversion funnel analysis, heatmaps, automated reporting flows, and monthly performance reviews. Data stops living in disconnected tools and starts informing product, marketing, and operations decisions."
                },
                cms: {
                    title: "Content Operations & CMS Support",
                    slogan: "Keep content moving without manual bottlenecks slowing the team down.",
                    description: "We support ongoing content operations: blog publishing workflows, product update pipelines, landing page refreshes, SEO-structured content systems, and AI-assisted drafting with editorial review controls. If your team edits content regularly, we design the process so updates are faster, lower risk, and easier to delegate across the organization."
                }
            }
        },
        work: {
            badgeCrossVertical: "Cross-Vertical",
            descCrossVertical: "Delivered projects spanning EdTech, FinTech, e-commerce, and cloud infrastructure.",
            badgeArchitectureLed: "Architecture-Led",
            descArchitectureLed: "Product case studies focused on system depth, resilience, and scalability — not off-the-shelf templates.",
            title: "Delivered",
            titleGradient: "Projects",
            subtitle: "From platforms serving tens of thousands of active users to high-performance real estate search systems. We document the work in detail, not marketing copy.",
            challenge: "Challenge",
            architecture: "Architecture",
            badge: "Case Studies",
            ctaTitle: "Want your project featured here?",
            ctaSubtitle: "Let's discuss how we'd scope, architect, and deliver your product.",
            ctaButton: "Start Your Project",
            categories: {
                all: "All",
                edtech: "EdTech",
                ecommerce: "E-commerce",
                realestate: "Real Estate",
                enterprise: "Enterprise Training",
                internal: "Internal Tools",
                cybersecurity: "IT & Cybersecurity"
            },
            projects: {
                academix: {
                    description: "A full-featured learning management system with role-based access control for instructors and students, including automated curriculum content generation.",
                    challenge: "Multi-tenant LMS platform for 10,000+ concurrent users, with complex role hierarchies and real-time collaborative features.",
                    architecture: "Real-time progress tracking via Socket.io, modular microservices architecture, PostgreSQL with row-level security for tenant isolation."
                },
                ecofit: {
                    description: "End-to-end e-commerce platform with integrated inventory management across multiple warehouses and payment processing through Stripe.",
                    challenge: "High-volume inventory synchronization and payment reconciliation across distributed warehouse locations and sales channels.",
                    architecture: "Event-driven architecture with message queues for order processing, eventual consistency model for distributed inventory state."
                },
                nclake: {
                    description: "A lakefront property listing platform for the Blue Ridge Mountain Foothills region of North Carolina, with real-time MLS data and map-based search.",
                    challenge: "Integrating live MLS data feeds while maintaining high-performance visual and geographic search at scale.",
                    architecture: "Next.js static generation for page performance, headless CMS integration for content management, geographic querying via PostGIS."
                },
                portalLearning: {
                    description: "Employee training and compliance management platform with course assignment, phishing simulation modules, and real-time progress dashboards.",
                    challenge: "Meeting strict regulatory compliance and full audit trail requirements across thousands of enterprise roles with varied training obligations.",
                    architecture: "Serverless functions for interaction tracking, granular RBAC implementation, multi-tenant data isolation architecture."
                },
                enterpriseCore: {
                    description: "Legacy-to-cloud modernization for a large-scale enterprise, migrating WinForms desktop applications to web-based dashboards.",
                    challenge: "Migrating a monolithic on-premises application to cloud infrastructure without service interruption or data loss during the transition window.",
                    architecture: "Strangler Fig migration pattern via API gateways, containerized microservices on AWS EKS, parallel database synchronization during cutover."
                },
                selecttech: {
                    description: "AI-powered IT solutions and cybersecurity platform for a 23-year-old NC-based MSP, covering compliance management, managed IT services, device repair, and network infrastructure.",
                    challenge: "Consolidating a wide service portfolio — FTC Safeguards, PCI, HIPAA compliance, device repair, and network infrastructure — into a single, structured web presence.",
                    architecture: "Vite and React SPA with modular service pages, Framer Motion UI animations, technically optimized static output for SEO, and integrated contact and pricing flows."
                }
            }
        }
    },
    vi: {
        nav: {
            home: 'Trang chủ',
            services: 'Dịch vụ',
            work: 'Dự án',
            process: 'Quy trình',
            about: 'Giới thiệu',
            startProject: 'Bắt đầu dự án',
        },
        footer: {
            tagline: 'Hệ thống thiết kế. Triển khai. Bảo trì.',
            builtForTime: 'Xây dựng để trường tồn.',
            navigate: 'Điều hướng',
            getInTouch: 'Liên hệ',
            allRightsReserved: 'Bảo lưu mọi quyền.',
            taglineBottom: 'Hệ thống, không chỉ là trang web.',
        },
        cta: {
            title: 'Hãy xây dựng những giá trị trường tồn',
            subtitle: 'Nếu bạn đã sẵn sàng đầu tư vào sự bài bản thay vì đi đường tắt, chúng ta hãy cùng trò chuyện.',
            button: 'Bắt đầu thảo luận',
        },
        hero: {
            badge: "Studio Phát Triển Phần Mềm & Vận Hành Hệ Thống Chuyên Nghiệp",
            headlineWords: ['Thiết kế,', 'xây dựng,', 'và', 'vận hành'],
            headlineGradient: 'hệ thống phần mềm bền vững.',
            subtitle: 'Giải pháp đồng bộ từ khâu thiết kế đến triển khai: Tối ưu hóa website, tự động hóa quy trình và tích hợp AI chuyên sâu cho doanh nghiệp.',
            button: 'Bắt đầu dự án',
        },
        services: {
            title: "Dịch vụ phát triển",
            titleGradient: "phần mềm",
            subtitle: "Chúng tôi thiết kế, xây dựng, tối ưu hạ tầng và đồng hành dài hạn cùng doanh nghiệp, giúp hệ thống vận hành ổn định sau khi bàn giao.",
            items: {
                ux: {
                    title: "Thiết kế Web & UX",
                    description: "Thiết kế giao diện Figma chuyên sâu, xây dựng wireframe, prototype và hệ thống UI/UX tối ưu hóa trải nghiệm người dùng trên đa thiết bị."
                },
                building: {
                    title: "Phát triển Web & Kiến trúc",
                    description: "Phát triển ứng dụng web, cổng thông tin doanh nghiệp, cơ sở dữ liệu và hệ thống API chuẩn hóa, hướng tới hiệu năng và khả năng bảo trì lâu dài."
                },
                hosting: {
                    title: "Hosting & CI/CD",
                    description: "Thiết lập hạ tầng đám mây, cấu hình CI/CD tự động, tối ưu hóa bảo mật SSL, tự động sao lưu dữ liệu và giám sát hệ thống 24/7."
                },
                maintenance: {
                    title: "Bảo trì & Mở rộng",
                    description: "Bảo trì định kỳ, vá lỗ hổng bảo mật, tối ưu hiệu suất tải trang (Core Web Vitals) và hỗ trợ kỹ thuật liên tục giúp website luôn hoạt động ổn định."
                },
                automation: {
                    title: "AI Agents & Tự động hóa",
                    description: "Tích hợp mô hình ngôn ngữ lớn (LLM), xây dựng chatbot AI thông minh và tự động hóa các quy trình vận hành giúp doanh nghiệp tiết kiệm thời gian và chi phí."
                },
                analytics: {
                    title: "Phân tích Dữ liệu & Báo cáo",
                    description: "Xây dựng dashboard trực quan, phân tích phễu chuyển đổi và cung cấp báo cáo đo lường chi tiết để tối ưu hóa hiệu quả hoạt động kinh doanh."
                }
            }
        },
        process: {
            title: "Quy trình",
            titleGradient: "làm việc",
            steps: {
                step1: {
                    title: "Phân tích & Đánh giá",
                    description: "Khảo sát quy trình và đánh giá rào cản kỹ thuật để xác định rõ phạm vi công việc, hạn chế rủi ro trước khi lập trình."
                },
                step2: {
                    title: "Thiết kế Hệ thống",
                    description: "Định hình trải nghiệm người dùng (UX), thiết kế kiến trúc cơ sở dữ liệu, chuẩn hóa API và lập bản đồ tự động hóa trước khi triển khai thực tế."
                },
                step3: {
                    title: "Xây dựng & Tích hợp",
                    description: "Lập trình ứng dụng web, xây dựng công cụ nội bộ và thiết lập quy trình triển khai tự động, đảm bảo toàn bộ hệ thống hoạt động đồng bộ."
                },
                step4: {
                    title: "Hỗ trợ & Cải tiến",
                    description: "Hỗ trợ kỹ thuật sau bàn giao, giám sát uptime, vá lỗi bảo mật, tối ưu tốc độ và đồng hành cùng doanh nghiệp cập nhật các tính năng mới."
                }
            },
            support: {
                badge: "HỖ TRỢ LIÊN TỤC",
                title: "Ra mắt một lần.",
                titleGradient: "Cải tiến liên tục.",
                description: "Chúng tôi đồng hành lâu dài cùng doanh nghiệp: từ bảo trì, giám sát hệ thống, sao lưu định kỳ đến kiểm tra an toàn triển khai và tối ưu hóa hiệu năng tổng thể.",
                monitoring: "Giám sát hệ thống",
                saferDeploys: "Triển khai An toàn",
                button: "Thảo luận về Hỗ trợ"
            }
        },
        philosophy: {
            title: "Xây dựng để",
            titleGradient: "Trường tồn",
            p1: "Đa số các dự án website hiện nay chỉ tập trung vào việc ra mắt nhanh chóng. Chúng tôi chọn hướng đi khác: kiến tạo các hệ thống bền vững theo thời gian. Mọi cấu trúc phần mềm đều được thiết kế linh hoạt, dễ dàng thích ứng với sự thay đổi của công nghệ và quy mô doanh nghiệp mà không bị gián đoạn.",
            p2: "Website không đơn thuần là một trang thông tin quảng cáo, nó là nền tảng hạ tầng của doanh nghiệp. Chúng tôi đưa ra các quyết định thiết kế dựa trên tư duy kiến trúc hệ thống: từng thành phần (component) và quy chuẩn mã nguồn đều phải đảm bảo tính ổn định cao khi nâng cấp và bảo trì lâu dài.",
            p3: "Thay vì chạy theo những xu hướng nhất thời, chúng tôi tập trung phát triển các hệ thống giữ được tính nhất quán và hiệu năng tối ưu qua nhiều năm. Giá trị cốt lõi chúng tôi mang lại không chỉ là sự mới mẻ, mà là độ bền bỉ và hiệu quả thực tế."
        },
        about: {
            badge: "Đội ngũ",
            title: "Định hình bởi",
            titleGradient: "Chuyên môn",
            subtitle: "Chúng tôi là một đội ngũ phát triển làm việc từ xa gồm các kỹ sư, kiến trúc sư và nhà thiết kế tâm huyết, cùng chung sứ mệnh xây dựng những phần mềm xuất sắc.",
            engineTitle: "Động cơ Vận hành",
            engineSubtitle: "Sự phối hợp nhịp nhàng giữa ba trụ cột công nghệ",
            cylinders: {
                ux: {
                    title: "Chiến lược",
                    description: "Đưa ra quyết định dựa trên số liệu thực tế. Chúng tôi phân tích sâu cơ hội thị trường và thiết kế giải pháp cân bằng giữa mục tiêu kinh doanh và tính khả thi về mặt kỹ thuật."
                },
                building: {
                    title: "Hệ thống",
                    description: "Quản lý hạ tầng dưới dạng mã nguồn (IaC). Chúng tôi phát triển các hệ thống ổn định, dễ mở rộng nhờ ứng dụng quy trình DevOps hiện đại và kiến trúc Cloud-native."
                },
                hosting: {
                    title: "Sản phẩm",
                    description: "Xây dựng hệ thống thiết kế (Design System) chuẩn hóa. Chúng tôi mang đến trải nghiệm người dùng trực quan, thẩm mỹ và nhất quán trên mọi nền tảng."
                }
            },
            valuesTitle: "Giá trị cốt lõi",
            valuesSubtitle: "Những nguyên tắc định hướng cho mọi hoạt động của chúng tôi",
            values: {
                transparency: {
                    title: "Minh bạch",
                    description: "Giao tiếp rõ ràng trong từng bước đi"
                },
                quality: {
                    title: "Chất lượng",
                    description: "Mã nguồn sạch, được kiểm thử và dễ bảo trì"
                },
                ownership: {
                    title: "Trách nhiệm",
                    description: "Sự thành công của bạn chính là sự thành công của chúng tôi"
                },
                innovation: {
                    title: "Cải tiến",
                    description: "Ứng dụng các công nghệ và quy chuẩn mới nhất"
                }
            },
            joinTitle: "Đồng hành cùng chúng tôi",
            joinSubtitle: "Sẵn sàng làm việc với một đội ngũ quan tâm đến sản phẩm của bạn nhiều như chính bạn?",
            joinButton: "Bắt đầu thảo luận"
        },
        contact: {
            title: "Liên hệ",
            subtitle1: "Bạn có dự án cần triển khai? Hay chỉ là một câu hỏi?",
            subtitle2: "Chúng tôi luôn sẵn sàng lắng nghe từ bạn.",
            emailHeader: "Email",
            expectHeader: "Quy trình tiếp nhận & xử lý thông tin",
            expect1: "Phản hồi nhanh chóng trong vòng 24 - 48 giờ làm việc.",
            expect2: "Nếu phù hợp, chúng ta sẽ lên lịch một cuộc trao đổi ngắn.",
            expect3: "Từ đó, chúng ta sẽ cùng xác định các bước đi tiếp theo.",
            messageSent: "Tin nhắn đã gửi thành công",
            sentSuccess: "Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.",
            form: {
                name: "Họ và tên",
                namePlaceholder: "Tên của bạn",
                email: "Email",
                emailPlaceholder: "ten@congty.com",
                company: "Công ty",
                companyOptional: "(tùy chọn)",
                companyPlaceholder: "Tên công ty của bạn",
                service: "Dịch vụ quan tâm",
                serviceSelect: "Chọn dịch vụ...",
                budget: "Ngân sách ước tính",
                budgetOptional: "(tùy chọn)",
                budgetSelect: "Chọn mức ngân sách...",
                message: "Nội dung tin nhắn",
                messagePlaceholder: "Mô tả sơ lược về dự án của bạn...",
                submit: "Gửi tin nhắn",
                sending: "Đang gửi..."
            },
            services: {
                ux: 'Thiết kế Web & Hệ thống UX',
                building: 'Phát triển Web & Kiến trúc Hệ thống',
                hosting: 'Hosting, DevOps & Cơ sở hạ tầng',
                maintenance: 'Bảo trì & Tối ưu Hiệu suất',
                automation: 'AI Agents & Tự động hóa Quy trình',
                analytics: 'Phân tích Dữ liệu & Báo cáo',
                cms: 'Vận hành Nội dung & Hỗ trợ CMS',
                other: 'Khác'
            },
            budgetOptions: {
                under_1k: 'Dưới $1,000',
                _1k_5k: '$1,000 – $5,000',
                _5k_10k: '$5,000 – $10,000',
                _10k_plus: 'Trên $10,000',
                tbd: 'Chưa xác định'
            }
        },
        processPage: {
            badge: "Cách chúng tôi chuyển giao",
            title: "Quy trình kỹ thuật",
            titleGradient: "bài bản",
            subtitle: "Chúng tôi xây dựng hệ thống tập trung vào thiết kế mã nguồn, ranh giới bảo mật, triển khai container hóa và đo lường hiệu suất liên tục sau khi ra mắt.",
            deliverablesHeader: "Kết quả bàn giao",
            phase: "Giai đoạn",
            ctaTitle: "Sẵn sàng cho một hệ thống bài bản?",
            ctaSubtitle: "Hãy cùng thảo luận cách thiết kế hệ thống trường tồn với các kết quả bàn giao rõ ràng tại mỗi giai đoạn.",
            ctaButton: "Bắt đầu cuộc trò chuyện",
            phases: {
                phase1: {
                    title: "Kiến trúc & Định hình",
                    description: "Thiết lập nền tảng vững chắc thông qua việc xác định rõ yêu cầu nghiệp vụ, thiết kế cấu trúc dữ liệu và thống nhất tiêu chuẩn API.",
                    deliverables: [
                        "Tài liệu yêu cầu kỹ thuật chi tiết",
                        "Đặc tả hợp đồng API (OpenAPI 3.0)",
                        "Thiết kế cấu trúc cơ sở dữ liệu",
                        "Sơ đồ thiết kế kiến trúc hạ tầng",
                        "Xác thực và đánh giá bộ công nghệ lựa chọn"
                    ]
                },
                phase2: {
                    title: "Phát triển & Kiểm thử",
                    description: "Phát triển theo kiến trúc mô-đun hóa. Xây dựng giao diện UI tái sử dụng, viết API với kiểu dữ liệu chặt chẽ và kiểm soát mã nguồn chặt chẽ qua Git.",
                    deliverables: [
                        "Các nhánh tính năng kèm kiểm duyệt code (PR reviews)",
                        "Tài liệu hướng dẫn sử dụng thư viện thành phần UI",
                        "Triển khai và kiểm thử API toàn diện",
                        "Thiết lập bộ kiểm thử tích hợp tự động",
                        "Triển khai bản demo thực tế hàng tuần"
                    ]
                },
                phase3: {
                    title: "Triển khai & Vận hành",
                    description: "Tự động hóa vận hành: cấu hình CI/CD, đóng gói ứng dụng (Docker) và thiết lập hệ thống giám sát cảnh báo tức thời để bảo đảm hệ thống vận hành liên tục.",
                    deliverables: [
                        "Thiết lập và cấu hình quy trình CI/CD",
                        "Container hóa ứng dụng sử dụng Docker",
                        "Cấu hình và tối ưu Kubernetes manifests",
                        "Thiết lập hệ thống giám sát và cảnh báo thời gian thực",
                        "Tối ưu hóa hiệu suất và lưu lượng truy cập"
                    ]
                }
            }
        },
        servicesPage: {
            badge: "NĂNG LỰC CỦA CHÚNG TÔI",
            title: "Dịch vụ",
            titleGradient: "Toàn diện",
            subtitle: "Từ thiết kế thương hiệu và bố cục đến kiến trúc đám mây và cập nhật liên tục, chúng tôi tối ưu mã nguồn để đồng hành cùng doanh nghiệp bạn.",
            button: "Xem chi tiết",
            discussSupport: "Thảo luận hỗ trợ",
            heroTitlePrefix: "Giải pháp phát triển",
            heroTitleGradient: "Website & Phần mềm trọn gói",
            heroSubtitle: "Chúng tôi không chỉ lập trình. Chúng tôi thiết lập kiến trúc, thiết kế giao diện, cấu hình triển khai và đảm bảo khả năng mở rộng lâu dài.",
            heroButton: "Khám phá Quy trình",
            heroLink: "Liên hệ thảo luận chiến lược",
            ctaTitlePrefix: "Sẵn sàng xây dựng",
            ctaTitleGradient: "sản phẩm đột phá",
            ctaButton: "Đặt lịch tư vấn",
            systemsSupported: "Hệ thống hỗ trợ hiện tại",
            items: {
                ux: {
                    title: "Thiết kế Web & Hệ thống UX",
                    slogan: "Giao diện được hoạch định rõ ràng, tối ưu chuyển đổi và sát với quy trình thực tế.",
                    description: "Chúng tôi thiết kế giao diện trên Figma trước khi tiến hành lập trình. Quy trình bao gồm nghiên cứu hành vi người dùng (UX), vẽ luồng trải nghiệm, xây dựng wireframe, thiết kế prototype tương tác và thiết lập hệ thống thiết kế (Design System) nhất quán. Mục tiêu là tạo ra những giao diện trực quan, dễ mở rộng mà không làm rối loạn cấu trúc thiết kế ban đầu."
                },
                building: {
                    title: "Phát triển Web & Kiến trúc Hệ thống",
                    slogan: "Từ trang web giới thiệu đến cổng thông tin, bảng điều khiển và công cụ nội bộ.",
                    description: "Chúng tôi chuyên phát triển các website và hệ thống phần mềm tùy chỉnh có cấu trúc vững chắc: thiết lập hợp đồng API rõ ràng, thiết kế cơ sở dữ liệu tối ưu, xây dựng sơ đồ kiến trúc hạ tầng và lựa chọn CMS phù hợp. Mọi quy trình lập trình và xây dựng luồng dữ liệu đều được tích hợp đồng bộ."
                },
                hosting: {
                    title: "Hosting, DevOps & Cơ sở hạ tầng",
                    slogan: "Quy trình triển khai tự động và nền tảng đám mây luôn vận hành ổn định.",
                    description: "Thiết lập hệ thống máy chủ và hạ tầng đám mây đáp ứng đúng nhu cầu thực tế của doanh nghiệp: quản lý VPS/Cloud, đóng gói ứng dụng qua Docker, cấu hình pipeline CI/CD tự động, cài đặt reverse proxy, bảo mật SSL, tự động hóa quy trình sao lưu và chuẩn bị phương án khôi phục dữ liệu nhanh chóng."
                },
                maintenance: {
                    title: "Bảo trì, Hiệu suất & Khả năng Mở rộng",
                    slogan: "Chăm sóc dài hạn cho phần mềm liên tục thay đổi sau khi ra mắt.",
                    description: "Bảo trì không chỉ đơn thuần là sửa lỗi phát sinh. Chúng tôi thực hiện tối ưu hóa hiệu năng, cải thiện các chỉ số Core Web Vitals giúp website đạt tốc độ tải trang cao nhất, vá lỗ hổng bảo mật, giám sát vận hành và nâng cấp hệ thống. Đồng thời, chúng tôi hỗ trợ triển khai SEO kỹ thuật (Technical SEO) và cấu trúc dữ liệu schema để tăng thứ hạng tìm kiếm."
                },
                automation: {
                    title: "AI Agents & Tự động hóa Quy trình",
                    slogan: "Tự động hóa các tác vụ lặp đi lặp lại mà không làm ảnh hưởng tới hệ thống.",
                    description: "Chúng tôi tích hợp các giải pháp trí tuệ nhân tạo (AI) vào các quy trình phù hợp: xây dựng chatbot hỗ trợ khách hàng, tự động hóa báo cáo định kỳ, phát triển dashboard thông minh và tích hợp các trợ lý ảo nội bộ dựa trên dữ liệu thực của doanh nghiệp. Thiết lập các luồng tự động hóa thông qua Zapier, Make hoặc API tùy chỉnh để loại bỏ các tác vụ thủ công lặp đi lặp lại."
                },
                analytics: {
                    title: "Phân tích Dữ liệu & Báo cáo",
                    slogan: "Dashboard và thông tin phân tích giúp đội ngũ của bạn ra quyết định dễ dàng.",
                    description: "Chuyển đổi dữ liệu thô từ hoạt động vận hành và sản phẩm thành những thông tin chi tiết, có giá trị ra quyết định: xây dựng dashboard KPI trực quan, phân tích phễu chuyển đổi, lập bản đồ nhiệt (heatmap) và gửi báo cáo đánh giá định kỳ hàng tháng. Mọi chỉ số sẽ được chuẩn hóa để hỗ trợ đắc lực cho đội ngũ quản lý."
                },
                cms: {
                    title: "Vận hành Nội dung & Hỗ trợ CMS",
                    slogan: "Giữ cho luồng nội dung luôn trôi chảy mà không bị nghẽn thủ công.",
                    description: "Hỗ trợ tối ưu hóa quy trình quản lý và cập nhật nội dung hàng ngày: thiết lập luồng xuất bản blog, cập nhật thông tin sản phẩm mới, thiết kế và tối ưu landing page, xây dựng cấu trúc nội dung chuẩn SEO và ứng dụng AI vào việc soạn thảo có kiểm duyệt. Giúp việc chỉnh sửa nội dung diễn ra nhanh chóng, an toàn và dễ dàng phân quyền cho nhân sự."
                }
            }
        },
        work: {
            badgeCrossVertical: "Đa lĩnh vực",
            descCrossVertical: "Các dự án thực tế trong EdTech, FinTech, E-commerce và hệ thống hạ tầng đám mây.",
            badgeArchitectureLed: "Trọng tâm Kiến trúc",
            descArchitectureLed: "Những sản phẩm thực tế tập trung vào chiều sâu kiến trúc hệ thống, sự bền bỉ và khả năng mở rộng thay vì giao diện có sẵn.",
            title: "Giải pháp",
            titleGradient: "Tiêu biểu",
            subtitle: "Từ các nền tảng phục vụ hàng chục ngàn người dùng đến hệ thống cơ sở dữ liệu bất động sản hiệu năng cao. Chúng tôi nói bằng kết quả thực tế, không dùng lời sáo rỗng.",
            challenge: "Thách thức",
            architecture: "Kiến trúc",
            badge: "Dự án thực tế",
            ctaTitle: "Bạn muốn thấy dự án của mình ở đây?",
            ctaSubtitle: "Hãy cùng thảo luận để hiện thực hóa tầm nhìn ứng dụng của bạn.",
            ctaButton: "Bắt đầu dự án của bạn",
            categories: {
                all: "Tất cả",
                edtech: "EdTech",
                ecommerce: "E-commerce",
                realestate: "Bất động sản",
                enterprise: "Đào tạo Doanh nghiệp",
                internal: "Công cụ nội bộ",
                cybersecurity: "An ninh mạng"
            },
            projects: {
                academix: {
                    description: "Hệ thống quản lý học tập (LMS) toàn diện phân quyền cho giảng viên và học viên, tích hợp tạo nội dung thông minh tự động.",
                    challenge: "Xây dựng hệ thống học tập trực tuyến LMS (Multi-tenant) cho hơn 10.000 người dùng với phân cấp vai trò phức tạp và tương tác thời gian thực.",
                    architecture: "Theo dõi tiến độ học tập thực tế qua Socket.io, phát triển kiến trúc Microservices dạng mô-đun và lưu trữ trên PostgreSQL bảo mật cấp dòng (RLS)."
                },
                ecofit: {
                    description: "Giải pháp thương mại điện tử quy mô lớn tích hợp quản lý kho tự động và xử lý thanh toán mượt mà qua Stripe.",
                    challenge: "Đồng bộ hóa dữ liệu tồn kho và xử lý thanh toán trực tuyến lưu lượng lớn qua nhiều kho hàng và kênh phân phối khác nhau.",
                    architecture: "Kiến trúc hướng sự kiện (Event-driven) với hàng đợi tin nhắn (Message Queue) để xử lý đơn hàng, đảm bảo tính nhất quán dữ liệu sau cùng (Eventual Consistency)."
                },
                nclake: {
                    description: "Nền tảng tìm kiếm và giới thiệu bất động sản ven hồ chuyên biệt tại khu vực Blue Ridge Mountain Foothills, Bắc Carolina.",
                    challenge: "Tích hợp luồng dữ liệu bất động sản (MLS) thời gian thực, đồng thời tối ưu hóa trải nghiệm tìm kiếm bản đồ và hình ảnh tốc độ cao.",
                    architecture: "Tối ưu hóa tải trang tĩnh (Static Site Generation) bằng Next.js, kết nối Headless CMS và thực hiện truy vấn địa lý nâng cao qua PostGIS."
                },
                portalLearning: {
                    description: "Nền tảng quản lý đào tạo và tuân thủ nội bộ của nhân viên doanh nghiệp với phân công khóa học, giả lập lừa đảo và dashboard theo dõi tiến độ.",
                    challenge: "Đảm bảo tính tuân thủ nghiêm ngặt và khả năng kiểm toán quy trình đào tạo trên hàng ngàn vai trò nhân sự khác nhau.",
                    architecture: "Triển khai Serverless Functions ghi nhận tương tác, cấu hình hệ thống phân quyền (RBAC) chặt chẽ và tách biệt dữ liệu đa người dùng."
                },
                enterpriseCore: {
                    description: "Hiện đại hóa và chuyển đổi đám mây cho các hệ thống doanh nghiệp quy mô lớn, chuyển đổi ứng dụng WinForms cũ sang nền tảng web hiện đại.",
                    challenge: "Di chuyển hệ thống phần mềm doanh nghiệp nguyên khối (Monolith) cũ sang hạ tầng đám mây hiện đại mà không gây gián đoạn dịch vụ.",
                    architecture: "Áp dụng mô hình chuyển đổi Strangler Fig thông qua API Gateways, chuyển đổi sang Microservices chạy trên AWS EKS và đồng bộ hóa cơ sở dữ liệu song song."
                },
                selecttech: {
                    description: "Giải pháp CNTT & nền tảng an ninh mạng hỗ trợ bởi AI cho MSP 23 năm tuổi tại Bắc Carolina — bao gồm quản lý tuân thủ, CNTT, sửa chữa thiết bị và hạ tầng.",
                    challenge: "Hợp nhất toàn bộ dịch vụ bảo mật và CNTT phức tạp (đáp ứng tiêu chuẩn FTC Safeguards, PCI, HIPAA) vào một trang web hiện đại và đồng bộ.",
                    architecture: "Phát triển ứng dụng Web SPA bằng Vite và React với các mô-đun dịch vụ linh hoạt, tối ưu hóa SEO kỹ thuật cho mã nguồn tĩnh và tích hợp luồng đăng ký báo giá tự động."
                }
            }
        }
    },
};

export type TranslationKeys = typeof translations.en;
export type TranslationKeyPath = string; // Simplified nested path support
